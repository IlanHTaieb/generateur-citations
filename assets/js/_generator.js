import {Citations} from "./_citations";

export const Generator = {
    data: {
        citations: [],
        values: {}
    },
    init() {
        $.getJSON("assets/js/data/citations.json", function (data) {
            Generator.data.values = data
        })
    },
    generate(nb, theme) {
        this.release()

        for (let i = 0; i < nb; i++) {
            Generator.data.citations.push(
                Citations.HTML(Generator.data.values, theme)
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