var target_popup = function(form) {
    window.open('',//URL should be blank so that it will take form attributes.
                'UniqueWindowName', //window name
                'width=400,height=400,resizeable,scrollbars');
    form.target = 'UniqueWindowName';
}