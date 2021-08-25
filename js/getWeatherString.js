export function getWeatherString(result) {
    switch (result) {
        case 1:
            return 'Klart';
        case 2:
            return 'Lätt molninghet';
        case 3:
            return 'Halvklart';
        case 4:
            return 'Molnigt';
        case 5:
            return 'Mycket moln';
        case 6:
            return 'Mulet';
        case 7:
            return 'Dimma';
        case 8:
            return 'Lätt regnskur';
        case 9:
            return 'Regnskur';
        case 10:
            return 'Kraftig regnskur';
        case 11:
            return 'Åskskur';
        case 12:
            return 'Lätt by av regn och snö';
        case 13:
            return 'By av regn och snö';
        case 14:
            return 'Kraftig by av regn och snö';
        case 15:
            return 'Lätt snöby';
        case 16:
            return 'Snöby';
        case 17:
            return 'Kraftig snöby';
        case 18:
            return 'Lätt regn';
        case 19:
            return 'Regn';
        case 20:
            return 'Kraftigt regn';
        case 21:
            return 'Åska';
        case 22:
            return 'Lätt snöblandat regn';
        case 23:
            return 'Snöblandat regn';
        case 24:
            return 'Kraftigt snöblandat regn';
        case 25:
            return 'Lätt snöfall';
        case 26:
            return 'Snöfall';
        case 27:
            return 'Ymnigt snöfall';
    }
}