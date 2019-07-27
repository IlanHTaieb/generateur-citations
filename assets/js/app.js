import {Generator} from './_generator'

$(document).ready(function () {
    Generator.init()

    $(".runCitations").click(function () {
        Generator.generate($(".nbCitations").val(), $(".theme").val())
    })

    $(".release").click(function () {
        Generator.release()
    })
})
