import {Format} from "./_format";

export const Generator = {
    data: {
        citations: [],
        json: {}
    },
    init() {
        $.getJSON("assets/js/data/citations.json", data => {
            Generator.data.json = data
        })
    },
    generate(nb, theme) {
        this.release()

        for (let i = 0; i < nb; i++) {
            Generator.data.citations.push(
                Format.HTML(Generator.data.json[theme])
            )
        }

        this.render()
        this.clear()
    },
    render() {
        this.data.citations.forEach(function (citation) {
            $(".citations").append(citation)
        })
    },
    clear() {
        this.data.citations = []
    },
    release() {
        $(".citations").html('')
    }
}