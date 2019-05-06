function showLoading() {
    if ($('#loadingToast').length == 0) {
        var dom = `<div id="loadingToast" class="weui_loading_toast">
            <div class="weui_mask_transparent"></div>
            <div class="weui_toast">
                <div class="weui_loading">
                    <!-- :) -->
                    <div class="weui_loading_leaf weui_loading_leaf_0"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_1"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_2"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_3"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_4"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_5"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_6"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_7"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_8"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_9"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_10"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_11"></div>
                </div>
                <p class="weui_toast_content">数据加载中</p>
            </div>
        </div>`;
        $('body').append(dom);
        return;
    }
    $('#loadingToast').show();
}
function hideLoading() {
    $('#loadingToast').hide();
}
function myAlert(t,p) {
    if($('.weui_dialog_alert').length==0){
        var dom = `
        <div class="weui_dialog_alert">
            <div class="weui_mask"></div>
            <div class="weui_dialog">
                <div class="weui_dialog_hd"><strong class="weui_dialog_title">${t}</strong></div>
                <div class="weui_dialog_bd">${p}</div>
                <div class="weui_dialog_ft">
                    <a href="javascript:;" class="weui_btn_dialog primary" ontouchstart="closeAlert();">确定</a>
                </div>
            </div>
        </div>
        `;
        $('body').append(dom);
        return;
    }
    $('.weui_dialog_title').html(t);
    $('.weui_dialog_bd').html(p);
    $('.weui_dialog_alert').show();
}
function closeAlert(){
    $('.weui_dialog_alert').hide();
}
$('body').append('<a href="https://afeyman.github.io/tool/" style="position:fixed;right:0;bottom:20px;opacity:.5;">返回首页，查看更多工具</a>');
