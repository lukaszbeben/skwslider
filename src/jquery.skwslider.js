'use strict';

(function ($) {


    var defaults = {
        animTime: 1000,
        pagination: false
    };

    $.fn.skwSlider = function (options) {
        var el = this,
            curPage = 1,
            numOfPages = 0,
            animTime = options.animTime || defaults.animTime,
            pagination = options.pagination || defaults.pagination,
            scrolling = false,
            pgPrefix = ".skw-page-";

        var setup = function () {
            el.wrap('<div class="skw-pages"></div>');

            el.children().each(function (index, current) {
                var imgSrc = $(current).find('> img').attr('src'),
                    content = $(current).find('> div').html();
                if (index === 0) {
                    index++;
                    $(el).parent().append('<div class="skw-page skw-page-' + index + ' active"><div class="skw-page__half skw-page__half--left"> <div class="skw-page__skewed"> <div class="skw-page__content">' + content + '</div> </div> </div> <div class="skw-page__half skw-page__half--right"> <div class="skw-page__skewed"> <div class="skw-page__content" style="background-image: url(' + imgSrc + ')"></div> </div> </div>  </div>');
                } else if (index % 2 === 0) {
                    index++;
                    $(el).parent().append('<div class="skw-page skw-page-' + index + '"><div class="skw-page__half skw-page__half--left"> <div class="skw-page__skewed"> <div class="skw-page__content">' + content + '</div> </div> </div> <div class="skw-page__half skw-page__half--right"> <div class="skw-page__skewed"> <div class="skw-page__content" style="background-image: url(' + imgSrc + ')"></div> </div> </div>  </div>');
                } else {
                    index++;
                    $(el).parent().append('<div class="skw-page skw-page-' + index + '"><div class="skw-page__half skw-page__half--left"> <div class="skw-page__skewed"> <div class="skw-page__content" style="background-image: url(' + imgSrc + ')"></div> </div> </div> <div class="skw-page__half skw-page__half--right"> <div class="skw-page__skewed"> <div class="skw-page__content">' + content + '</div> </div> </div> </div>');
                }
            });

            el = el.parent();
            el.find('> ul').remove();

            numOfPages = $(el).children().length;

            if (pagination) {
                var i = 1;
                $(el).append('<ul class="skw-page__pagination"></ul>');
                for (i = 1; i <= numOfPages; i++) {
                    $(el).find('ul').append('<li>' + i + '</li>');
                    $(el).find('ul > :first-child').addClass('active');
                }
            }

        };

        var start = function () {
            function pagination(firstOrLast) {
                scrolling = true;
                if (firstOrLast) {
                    $(el).find('.skw-page').removeClass("active");
                    $(el).find(pgPrefix + curPage).removeClass("inactive").addClass('active');
                } else {
                    $(el).find(pgPrefix + curPage).removeClass("inactive").addClass("active");
                    $(el).find(pgPrefix + (curPage - 1)).addClass("inactive");
                    $(el).find(pgPrefix + (curPage + 1)).removeClass("active");
                    if (pagination) {
                        $(el).find('.skw-page__pagination');
                    }
                }
                if (pagination) {
                    $(el).find('.skw-page__pagination li').eq(curPage - 1).addClass('active');
                    $(el).find('.skw-page__pagination li').eq(curPage - 1).siblings().removeClass('active');
                }
                setTimeout(function () {
                    scrolling = false;
                }, animTime);
            };

            function navigateUp() {
                if (curPage === 1) {
                    curPage = numOfPages;
                    pagination(curPage);
                } else {
                    curPage--;
                    pagination();
                }
            };

            function navigateDown() {
                if (curPage === numOfPages) {
                    curPage = 1;
                    pagination(curPage);
                } else {
                    curPage++;
                    pagination();
                }
            };

            $(el).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                if (scrolling) return;
                if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                    navigateUp();
                } else {
                    navigateDown();
                }
            });

            $(document).on("keydown", function (e) {
                if (scrolling) return;
                if (e.which === 38) {
                    navigateUp();
                } else if (e.which === 40) {
                    navigateDown();
                }
            });


        }

        var controls = function () {
            var pagination = $(el).find('.skw-page__pagination');
            $(pagination).css('margin-left', '-' + $(pagination).width() / 2 + 'px');
            pagination.children().each(function (index, current) {
                $(current).on('click', function () {
                    curPage = index + 1;
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                    $(el).find('.skw-page').removeClass("active");
                    $(el).find(pgPrefix + curPage).removeClass("inactive").addClass('active');
                });
            });
        }

        var init = function () {
            setup();
            start();
            if (pagination) {
                controls();
            }
        }
        init();

    };

})(jQuery);