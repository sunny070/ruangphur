<?php

namespace App\Exports;

use App\Models\Application;
use Maatwebsite\Excel\Concerns\FromCollection;

class VerifierApplicationsExport implements FromCollection
{
    protected $filters;
    protected $userDistricts;

    public function __construct($filters, $userDistricts)
    {
        $this->filters = $filters;
        $this->userDistricts = $userDistricts;
    }

    public function collection()
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
            ->when($this->filters['status'] ?? null, fn($q) => $q->where('status', $this->filters['status']))
            ->when($this->filters['constituency_id'] ?? null, function ($q) {
                $q->whereHas('deceased', fn($q) => $q->where('constituency_id', $this->filters['constituency_id']));
            })
            ->when($this->filters['start_date'] ?? null, fn($q) => $q->whereDate('created_at', '>=', $this->filters['start_date']))
            ->when($this->filters['end_date'] ?? null, fn($q) => $q->whereDate('created_at', '<=', $this->filters['end_date']))
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Applicant Name',
            'Deceased Name',
            'Status',
            'Created At',
            // Add more columns as needed
        ];
    }
}
