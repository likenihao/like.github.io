/* nav.js zhaokun 20150709 主要应用于首页右侧导航栏 */
$(document).ready(function () {
	//openCart-start
	$('.openCart').click(function () {
		if ($('.toolbar-wrap').hasClass('toolbar-open')) {
			$('.toolbar-wrap').removeClass('toolbar-open');
			$(".toolbar-wrap").attr("style", "right: 0px;transition: 400ms;");
			$('.tbar-panel-cart').css({
				'visibility': "hidden",
				"z-index": "-1"
			});
		} else {
			$(this).addClass('tbar-tab-click-selected');
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css({
				'visibility': "visible",
				"z-index": "1"
			});
			$('.tbar-panel-follow').css('visibility', 'hidden');
			$('.tbar-panel-history').css('visibility', 'hidden');
			$('.toolbar-wrap').addClass('toolbar-open');
			$(".toolbar-wrap").attr("style", "right: 270px;transition: 400ms;");
		}
	});
	$("body").click(function (e) {
		if (!$(e.target).closest(".openCart").length) {
			$('.toolbar-wrap').removeClass('toolbar-open');
			$(".toolbar-wrap").attr("style", "right: 0px;transition: 400ms;");
		}
	});
	//openCart-end

});