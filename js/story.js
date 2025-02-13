$(function () {
  $.ajax({
    url: "json/story.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          var title = data[i].title;
          var story = data[i].story;
          var txt = data[i].txt;
          var url = data[i].url;

          $(".story_box")
            .eq(i)
            .append(
              '<div><a href="#">' +
                "<img src='img/" +
                url +
                "'/>" +
                "</a></div>"
            );

          $(".story_box")
            .eq(i)
            .append('<h5><a href="#">' + title + "</a></h5>");

          $(".story_box")
            .eq(i)
            .append("<p>" + story + "</p>");

            $(".story_box")
            .eq(i)
            .append("<span>" + txt + "</span>");

          $(".story_box > div > a > img").css({
            width: "280px",
            height: "400px",
            overflow: "hidden",
            transition: "0.24s",
          });

          $(".story_box").hover(
            function () {
              $(this).css({
                opacity: "0.9",
                transition: "0.24s",
                transform: "scale(1.04)",
              });
            },
            function () {
              $(this).css({
                opacity: "1",
                transform: "scale(1)",
              });
            }
          );

          $(".story_box h5 a").css({ fontSize: "16px", "line-height": "12px" });
          $(".story_box p").css({ fontSize: "11px", "line-height": "12px" });
          $(".story_box span").css({ fontSize: "16px", "line-height": "14px" });
        }
      }
    },
  });
});
