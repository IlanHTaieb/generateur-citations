export const Format = {
    HTML(data) {
        let start = data["start"][Math.floor(Math.random() *
            (Object.keys(data["start"]).length)) + 1
            ]

        let middle = data["middle"][Math.floor(Math.random() *
            (Object.keys(data["middle"]).length)) + 1
            ]

        let end = data["end"][Math.floor(Math.random() *
            (Object.keys(data["end"]).length)) + 1
            ]
        return '<li class="list-group-item">' + start + ' ' + middle + ' ' + end + '</li>'
    }
}