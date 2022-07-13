export const parseCurrency = (value) => {
    return new Intl.NumberFormat("id-ID").format(value)
}

export const localDate = (time) => {
    return new Intl.DateTimeFormat("id-ID").format(time)
}

export const truncateChars = (text) => {
    return `${text.slice(0,8)} ...`
}


export const dummyProduct = [

    {
        tanggal : "12/12/2022",
        id : "8e938hddieufe",
        pembeli : "Hendri Alqori",
        nama : "Kursi Jati",
        jumlah  : 10,
        total : 3000000,
        keterangan : "cash"
    },
    {
        tanggal : "11/06/2022",
        id : "8e938hddieu43s",
        pembeli : "PT Intan",
        nama : "Kursi belajar",
        jumlah  : 8,
        total : 3400000,
        keterangan : "cash"
    },
    {
        tanggal : "11/02/2022",
        id : "8e938hddie21as",
        pembeli : "PT Jaya",
        nama : "Kasur",
        jumlah  : 2,
        total : 5500000,
        keterangan : "cash"
    },
    {
        tanggal : "12/05/2021",
        id : "8e93sasasdw4",
        pembeli : "CV Arli",
        nama : "Meja jati",
        jumlah  : 13,
        total : 30000000,
        keterangan : "cash"
    },
    {
        tanggal : "11/06/2022",
        id : "8e938hddieu43s",
        pembeli : "PT Sentosa",
        nama : "Lemari",
        jumlah  : 10,
        total : 1400000,
        keterangan : "cash"
    },
    {
        tanggal : "11/02/2022",
        id : "8e938hddie21as",
        pembeli : "PT Abadui",
        nama : "Jendela",
        jumlah  : 14,
        total : 20000000,
        keterangan : "cash"
    },
    {
        tanggal : "27/01/2022",
        id : "8e938hddieieuheiu",
        pembeli : "PT JASA RAHA",
        nama : "Kaca",
        jumlah  : 14,
        total : 20000000,
        keterangan : "cash"
    },

]