let s=document.getElementsByClassName('.wrapper .card .circle').offsetWidth;
let options = {
    startAngle: -1.55,
    size: 110,
    value: 0.85,
    fill: '#0bceaf'
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".creativity .bar").circleProgress({
    value: 0.70
});
$(".time_man .bar").circleProgress({
    value: 0.80
});
$(".Communication .bar").circleProgress({
    value: 0.60
});

