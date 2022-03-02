jQuery(document).ready(function(){
    jQuery('.submit').click(function(){
        var namm=jQuery('input#nam').val();
        var addr=jQuery('input#addresss').val();
        $.ajax({
            'url'   : 'process.php',
            'data'  :{
                'name'  : namm,
                'address'   : addr
            },
            'type'  : 'POST',
            'success'   : function(ami){
                jQuery('.shown').html(ami);
            }
        });

        return false;
    });
});