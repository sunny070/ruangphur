<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script defer src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBma3tkA0KlHgMhTDR5tyrANd29OtxYyJs" type="text/javascript"></script>
        

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
    <script src="https://maps.googleapi.com/maps/api/js?key=AIzaSyAw2jjJyl1pEGlZOVBZ-J17h68_EVfQRH8"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAw2jjJyl1pEGlZOVBZ-J17h68_EVfQRH8&libraries=places"></script>
</html>
