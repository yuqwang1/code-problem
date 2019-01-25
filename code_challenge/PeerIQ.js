function solution() {
    // You can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');
    let result = 0
    $("input[type='checkbox']").each(function(){
        let id = $(this).attr('id').slice(-3);
        let index1 = parseInt(id.slice(0,1));
        let index2 = parseInt(id.slice(-1))
        if (should_be_checked(index1, index2) === true){

            result += 1;
        }
    })
    return result;
}

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')


    let length;
    let depth = 0;
    $('li:not(:has(ol)):not(:has(ul))').each(function() {
        length = $(this).parents('ul,ol').length;
        if (length > depth)
            depth = length;
    });
    return depth
}
