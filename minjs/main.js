$(".menu li").click(function(){var o="#"+$(this).attr("goto"),t=$(o).position().top;$("html").scrollTop(t)});