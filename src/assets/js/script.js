
function checkWidth()
{
    const width = $(window).width();
    const height = $(window).height();
    if(width < 769){
        $('.tox').css('height', height - 250);
        $('#sidebar').removeClass('hide_mob');
        $('#sidebar').addClass('close');
    }   
    else{
        $('#sidebar').removeClass('close');
    }
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != 'undefined'
        && typeof document.createRange != 'undefined') {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}
function isScrolledToBottom(container) {
    return (
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10
    );
}
let isLoading = false; 
function loadMoreItems() {
    if (isLoading) return;
    isLoading = true;
    $('#loader').css('display','block'); 

    setTimeout(() => {
        const newItems = $('#mailList:not(#loader)').html();
        $('#mailList').append(newItems); 
        isLoading = false;
        $('#loader').css('display','none'); 
    }, 1000); 
}

// localStorage.getItem('theme') == 'dark' ? $('body').addClass('dark') : $('body').removeClass('dark');
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(document).ready(function(){
    
    if(localStorage.getItem('theme') == 'dark')
    {
        $('#mode').prop('checked', true);
        $('.light_mode_icon').addClass('d-none');
        $('.dark_mode_icon').removeClass('d-none');
    }
    else
    {
        $('#mode').prop('checked', false);
        $('.light_mode_icon').removeClass('d-none');
        $('.dark_mode_icon').addClass('d-none');
    }
    $('#toggleBtn').on('click', function(){
        $('#sidebar').toggleClass('close');
        const width = $(window).width();
        if(!$('#sidebar').hasClass('close'))
        {
            if(width < 769){
                $('body').css('overflow', 'hidden');

            }else{
                $('body').css('overflow', 'auto');
                setTimeout(function(){
                    $('#sidebar').find('.hide_txt').removeClass('d-none');
                },180);

            }
        }else{
            $('body').css('overflow', 'auto');
            if(width > 769){
                $('#sidebar').find('.hide_txt').addClass('d-none');   
            }
        }
    });
    checkWidth();
    $(window).on('resize', function(){
        checkWidth();
    });
    $(document).on('click','.email_compose',function(){
        $('#composeEmail').removeClass('d-none');
        const width = $(window).width();
        const height = $(window).height();
        var compHeight = 300;
        if(width < 769){
            compHeight = height - 260;
        }
        tinymce.init({
            height: compHeight,
            selector: '#compose_content',
            plugins: 'lists advlist link',
            menubar: false,
            toolbar: 'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | numlist bullist | indent outdent | formatselect fontselect fontsizeselect | removeformat',
        });
        $('#recipient').focus();
        
    });
    $(document).on('click','.remove_compose',function(){
        $('#composeEmail').addClass('d-none');
        $('#composeEmail').find('minimize_compose , .fullscreen_compose').removeClass('active');
        $('#composeEmail').removeClass('minimize , fullscreen');
        $('#composeEmail').find('.compose_footer , .compose_content').removeClass('d-none');
        $('.compose_inp').val(null);
        $('.tox').contents().find('body').html(null);
        $('#cc_btn , #bcc_btn').removeClass('d-none');
        $('#cc , #bcc').addClass('d-none');
        $('#recipient').removeClass('focus');
        $('.recipient_focus').addClass('d-none');
        tinymce.get('compose_content').setContent('');
        tinymce.remove();
    });
    $(document).on('click','.star_btn',function(){
        $(this).toggleClass('active');
    });

    $(document).on('click','.profile_btn',function(){
        const width = $(window).width();
        if(width < 769){
            $('#profileDropdownMob').toggleClass('d-none');
        }else{
            $('#profileDropdown').toggleClass('d-none');
        }
    });
    $(document).on('click','.fullscreen_compose',function(){
        $(this).toggleClass('active');
        $(this).closest('#composeEmail').removeClass('minimize');
        $(this).closest('#composeEmail').find('.minimize_compose').removeClass('active');
        $(this).closest('#composeEmail').find('.compose_content , .compose_footer').removeClass('d-none');

        if($(this).hasClass('active'))
        {
            $(this).closest('#composeEmail').addClass('fullscreen');
            var minus_height = 0;
            if(!$('#cc').hasClass('d-none')){
                minus_height += $('#cc').height();
            }
            if(!$('#bcc').hasClass('d-none')){
                minus_height += $('#bcc').height();
            }
            minus_height += 330;
            var height = $(window).height() - minus_height;
            $(this).closest('#composeEmail').find('.tox').css('height', height);
        }
        else
        {
            $(this).closest('#composeEmail').removeClass('fullscreen');
            var minus_height = 0;
            if(!$('#cc').hasClass('d-none')){
                minus_height += $('#cc').height();
            }
            if(!$('#bcc').hasClass('d-none')){
                minus_height += $('#bcc').height();
            }
            var new_height = 300 - minus_height;
            $(this).closest('#composeEmail').find('.tox').css('height', new_height);
        }
    });
    $(document).on('click','.minimize_compose',function(){
        $(this).toggleClass('active');
        $(this).closest('#composeEmail').removeClass('fullscreen');
        $(this).closest('#composeEmail').find('.fullscreen_compose').removeClass('active');
        $(document).find('.tox-toolbar__overflow').remove();


        if($(this).hasClass('active'))
        {
            $(this).closest('#composeEmail').find('.compose_content , .compose_footer').addClass('d-none');
            $(this).closest('#composeEmail').addClass('minimize');
        }
        else
        {
            $(this).closest('#composeEmail').find('.compose_content , .compose_footer').removeClass('d-none');
            $(this).closest('#composeEmail').removeClass('minimize');

        }
    })

    $(document).on('focus','#recipient',function(){
        $(this).addClass('focus');
        $('.recipient_focus').removeClass('d-none');
    });
    $(document).on('focus','#subject',function(){
        $('#recipient').removeClass('focus');
        $('.recipient_focus').addClass('d-none');
    });
    $(document).on('click','#cc_btn',function(){
        $('#cc').removeClass('d-none');
        $(this).addClass('d-none');
        var height = $('.tox').height() - $('#cc').height();
        $('.tox').css('height', height - 10);
    });
    $(document).on('click','#bcc_btn',function(){
        $('#bcc').removeClass('d-none');
        $(this).addClass('d-none');
        var height = $('.tox').height() - $('#bcc').height();
        $('.tox').css('height', height - 10);
    });
    $(document).on('click','#format_btn',function(e){
        $(this).toggleClass('active');
        $('#format_dropdown').toggleClass('d-none');
        e.stopPropagation();
    });
    $(document).on('change','input[name="format"]',function(){
        $('.check_icon').addClass('d-none');
        $(this).parent().find('.check_icon').removeClass('d-none');
    });
    $(document).on('change','input[name="format2"]',function(){
        if($(this).is(':checked')){
            $(this).parent().find('.check_icon2').removeClass('d-none');
        }
        else
        {
            $(this).parent().find('.check_icon2').addClass('d-none');
        }
    });
    $(document).on('change','input[name="format3"]',function(){
        if($(this).is(':checked')){
            $(this).parent().find('.check_icon3').removeClass('d-none');
        }
        else
        {
            $(this).parent().find('.check_icon3').addClass('d-none');
        }
    });

    $(document).on('click', '.format_list li', function(event){
        $(this).find('label').trigger('click');
    });
    
    $(document).on('click', '.format_list li label', function(event){
        event.stopPropagation(); 
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#format_dropdown').length) {
            $('#format_dropdown').addClass('d-none');
        }
    });
    $(document).on('click', '.dissmiss_btn', function(event){
        var old_height = $('.mail_list').height();
        $('.mail_list').css('height', old_height + 100);
    });

    $(document).on('click', '.security_btn', function(event){
        if($(this).hasClass('verify_active'))
        {
            $(this).removeClass('verify_active');
            $(this).addClass('verify_disabled');
        }
        else
        {
            $(this).removeClass('verify_disabled');
            $(this).addClass('verify_active');
        }
    });
    $(document).on('change','#auto_logout',function(){
        if($(this).is(':checked'))
        {
            $(this).parent().find('.minute_inp').removeClass('d-none');
        }
        else
        {
            $(this).parent().find('.minute_inp').addClass('d-none');
        }
    });
    const urlParams = new URLSearchParams(window.location.search);
    const tabToActivate = urlParams.get('tab');

    if (tabToActivate) {
        document.querySelectorAll('.setting_tabs .nav-link').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));
        const targetTab = document.querySelector(`[data-bs-target="#nav-${tabToActivate}"]`);
        const targetPane = document.querySelector(`#nav-${tabToActivate}`);
        if (targetTab && targetPane) {
            targetTab.classList.add('active');
            targetPane.classList.add('show', 'active');
        }
    }

    $(document).on('change','#mode',function(){ 
        if($(this).is(':checked'))
        {
            $('body').addClass('dark');
            localStorage.setItem('theme', 'dark');
            $('.light_mode_icon').addClass('d-none');
            $('.dark_mode_icon').removeClass('d-none');
        }
        else
        {
            $('body').removeClass('dark');
            localStorage.setItem('theme', 'light');
            $('.light_mode_icon').removeClass('d-none');
            $('.dark_mode_icon').addClass('d-none');
        }
    });
    $(document).on('change', '.mail_inp', function () {
        if ($('.mail_inp:checked').length > 0) {
            $('.trash_spam_btn').removeClass('d-none');
        } else {
            $('.trash_spam_btn').addClass('d-none');
        }
    });
    const suggestions = [
        { name: 'John Doe', email: 'q9m0a@example.com' },
        { name: 'Jane Smith', email: 'jane.smith@example.com' },
        { name: 'Mark Lee', email: 'mark.lee@example.com' }
    ];
    $(document).on('keyup', '.compose_inp', function (e) {
        const suggestionBox = $(this).parent().find('.email_suggestion');
        const inputField = $(this);
        const emailText = inputField.contents().filter(function () {
            return this.nodeType === Node.TEXT_NODE;
        }).text().trim();
        if (emailText.length > 0) {
            const filteredSuggestions = suggestions.filter(suggestion =>
                suggestion.email.toLowerCase().includes(emailText.toLowerCase())
            );

            // Clear existing suggestions
            suggestionBox.empty();

            if (filteredSuggestions.length > 0) {
                suggestionBox.removeClass('d-none');
                filteredSuggestions.forEach(suggestion => {
                    const suggestionItem = $(`
                        <div class="d-flex gap-2 align-items-center suggestion_item">
                            <img src="assets/images/profile.png" alt="" width="40" height="40" class="rounded-circle">
                            <div>
                                <p class="m-0 fw-bold fs_14">${suggestion.name}</p>
                                <p class="m-0 fs_14">${suggestion.email}</p>
                            </div>
                        </div>
                    `);
                        suggestionItem.on('click', function () {
                            const bubble = $(
                                `<span class="email-bubble">${suggestion.email}<span class="close-btn">×</span></span>`
                            );
                            inputField.append(bubble);
                            inputField.find('br , div').remove();
                            inputField.contents().filter(function () {
                                return this.nodeType === Node.TEXT_NODE;
                            }).remove();
                            inputField.append('&nbsp;&nbsp;');
                            placeCaretAtEnd(inputField[0]);
                            suggestionBox.addClass('d-none');
                        });
                    suggestionBox.append(suggestionItem);
                });
            } else {
                suggestionBox.addClass('d-none');
            }
        } else {
            suggestionBox.addClass('d-none');
        }
        
        if (e.key === 'Backspace') {
            const lastElement = inputField.contents().last();
    
            if (emailText === '' && inputField.find('.email-bubble').length === 0) {
                inputField.html('');
                inputField.attr('data-placeholder', 'CC');
            }
    
            // If the last element is a bubble, remove it
            if (lastElement[0]?.nodeName === 'SPAN' && lastElement.hasClass('email-bubble')) {
                lastElement.remove();
            }
        }
    
        if (e.key === 'Enter') {
            e.preventDefault();
            
            if (validateEmail(emailText)) {
                const bubble = $(
                    `<span class="email-bubble">${emailText}<span class="close-btn">×</span></span>`
                );

                inputField.append(bubble);
                inputField.find('br , div').remove();
                inputField.contents().filter(function () {
                    return this.nodeType === Node.TEXT_NODE;
                }).remove();
                inputField.append('&nbsp;&nbsp;');
                placeCaretAtEnd(inputField[0]);
            } else {
                inputField.find('div, br').remove();
            }
        }
    
        // Remove placeholder when typing starts
        if (emailText !== '') {
            inputField.removeAttr('data-placeholder');
        }
    });
    $(document).on('click', '.close-btn', function () {
        $(this).parent().remove();
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.position-relative').length) {
            $('.email_suggestion').addClass('d-none');
        }
    });
    
    if(document.getElementById('mailList')){
        document.getElementById('mailList').addEventListener('scroll', function () {
            if (isScrolledToBottom(this)) {
                loadMoreItems();
            }
        });
    }
    // Initialising the canvas
if(document.querySelector('#canvas'))
{
    var canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d');
    canvas.width = document.querySelector('.coming_content').offsetWidth;
    canvas.height = document.querySelector('.coming_content').offsetHeight;
}
if(document.querySelector('#canvas2'))
{
    var canvas2 = document.querySelector('#canvas2'),
    ctx2 = canvas2.getContext('2d');
    canvas2.width = document.querySelector('.coming_content').offsetWidth;
    canvas2.height = document.querySelector('.coming_content').offsetHeight;
}


var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

if(document.querySelector('#canvas'))
{
    var fontSize = 18,
    columns = canvas.width / fontSize;
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
}
if(document.querySelector('#canvas2'))
{
    var fontSize2 = 18,
    columns2 = canvas2.width / fontSize2;
    var drops2 = [];
    for (var j = 0; j < columns2; j++) {
        drops2[j] = 1;
    }
}


// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#4b9025';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
        }
    }
}
function draw2() {
    ctx2.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
    for (var i = 0; i < drops2.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx2.fillStyle = '#4b9025';
    ctx2.fillText(text, i * fontSize2, drops2[i] * fontSize2);
    drops2[i]++;
        if (drops2[i] * fontSize2 > canvas2.height && Math.random() > .95) {
            drops2[i] = 0;
        }
    }
}

// Loop the animation

if(document.querySelector('#canvas')){
    setInterval(draw, 50);
}
if(document.querySelector('#canvas2')){
setInterval(draw2, 50);
}
});