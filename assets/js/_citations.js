export const Citations = {
    HTML(data, theme) {
        let start = data[theme]["start"][Math.floor(Math.random() *
            (Object.keys(data[theme]["start"]).length)) + 1
            ]

        let middle = data[theme]["middle"][Math.floor(Math.random() *
            (Object.keys(data[theme]["middle"]).length)) + 1
            ]

        let end = data[theme]["end"][Math.floor(Math.random() *
            (Object.keys(data[theme]["end"]).length)) + 1
            ]
        return '<li class="list-group-item">' + start + ' ' + middle + ' ' + end + '</li>'
    }
}