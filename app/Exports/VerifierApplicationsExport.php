<?php

namespace App\Exports;

use App\Models\Application;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;


class VerifierApplicationsExport implements FromQuery, WithHeadings, WithMapping
{
    protected $filters;
    protected $userDistricts;

    public function __construct($filters, $userDistricts)
    {
        $this->filters = $filters;
        $this->userDistricts = $userDistricts;
    }

    public function query()
    {
        return Application::with([
                'applicant.district',
                'deceased.district',
                'deceased.constituency',
                'transport.sourceDistrict',
                'transport.destinationDistrict',
            ])
            ->whereIn('status', ['Pending', 'Verified', 'Rejected'])
            ->whereHas('deceased', function ($query) {
                $query->whereIn('district_id', $this->userDistricts);
            })
            ->when($this->filters['district_id'] ?? null, function ($query) {
                $query->whereHas('deceased', function ($q) {
                    $q->where('district_id', $this->filters['district_id']);
                });
            })
            ->when($this->filters['status'] ?? null, fn($q) => $q->where('status', $this->filters['status']))
            ->when($this->filters['constituency_id'] ?? null, function ($q) {
                $q->whereHas('deceased', fn($q) => $q->where('constituency_id', $this->filters['constituency_id']));
            })
            ->when($this->filters['start_date'] ?? null, fn($q) => $q->whereDate('created_at', '>=', $this->filters['start_date']))
            ->when($this->filters['end_date'] ?? null, fn($q) => $q->whereDate('created_at', '<=', $this->filters['end_date']))
            ->orderBy('created_at', 'desc');
    }

    public function headings(): array
    {
        return [
            'Application No',
            'Status',
            'Applicant Name',
            'Applicant District',
            'Deceased Name',
            'Deceased Constituency',
            'Transport Cost',
            'Created At',
        ];
    }
    public function map($application): array
    {
        return [
            $application->application_no,
            $application->status,
            $application->applicant->name,
            $application->applicant->district->name,
            $application->deceased->name,
            $application->deceased->constituency->name ?? 'N/A',
            $application->transport->transport_cost ?? '0',
            $application->created_at->format('Y-m-d H:i'),
        ];
    }
}
