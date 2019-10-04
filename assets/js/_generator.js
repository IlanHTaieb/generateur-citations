import {Format} from "./_format";

export const Generator = {
    data: {
        citations: [],
        json: {}
    },
    init() {
        $.getJSON("http://localhost/_OPENCLASSROOMS/generateur-citations/assets/js/data/citations.json", data => {
            Generator.data.json = data
        })
    },
    generate(nb, theme) {
        $('.citation-item').animate({
            opacity: 0,
            marginRight: -10000
        }, 1000, function () {
            Generator.release()
            Generator.create(nb, theme)
            Generator.render()
            Generator.clear()
        })
    },
    create: function(nb, theme) {
        for (let i = 0; i < nb; i++) {
            Generator.data.citations.push(
                Format.HTML(Generator.data.json[theme])
            )
        }
    },
    render: function() {
        this.data.citations.forEach(function (citation) {
            $(".citations").append(citation)
        })
    },
    clear: function() {
        this.data.citations = []
    },
    release: function() {
        $(".citations").html('')
    }
}