$(function () {
    $.ajax({
      url: "json/partners.json",
      dataType: "json",
      success: function (data) {
        if (data.length > 0) {
          for (var i in data) {
            var title = data[i].title;
            var price = data[i].price;
            var url = data[i].url;
  
            $(".partners_box")
              .eq(i)
              .append(
                '<div><a href="#">' +
                  "<img src='img/" +
                  url +
                  "'/>" +
                  "</a></div>"
              );
  
            $(".partners_box")
              .eq(i)
              .append('<h5><a href="#">' + title + "</a></h5>");
  
            $(".partners_box")
              .eq(i)
              .append("<span>" + price + "</span>");
  
            $(".partners_box > div > a > img").css({
              width: "280px",
              height: "285px",
              overflow: "hidden",
              transition: "0.24s",
              "border-radius": "20px",
            });
  
            $(".partners_box").hover(
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
  
            $(".partners_box h5 a").css({ fontSize: "16px", "line-height": "12px" });
            $(".partners_box span").css({ fontSize: "16px", "line-height": "28px" });
          }
        }
      },
    });
  });
  