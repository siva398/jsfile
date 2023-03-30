$(document).ready(function(){
    $("#myselect").select2();

var mainobj = {};
mainobj['1'] = "aaaa";
mainobj['2'] = "bbbb";
mainobj['3'] = "cccc";
mainobj['4'] = "dddd";
mainobj['5'] = "eeee";
mainobj['6'] = "ffff";
mainobj['7'] = "gggg";
mainobj['8'] = "hhhh";
mainobj['9'] = "iiii";
mainobj['10'] = "jjjj";
mainobj['11'] = "kkkk";
mainobj['12'] = "llll";
mainobj['13'] = "mmmm";
mainobj['14'] = "nnnn";

    $('#myselect').on('select2:open', function () {
        var searchinput = $('.select2-search__field');
        searchinput.on('input', function () {
            var searchval = searchinput.val();
            for (let id in mainobj){
                if(mainobj[id].match(searchval)){
                    var newOption = new Option(mainobj[id], id, false, false);
                    $('#myselect option[value="' + id + '"]').remove().trigger('change');
                    $('#myselect').append(newOption);
                }
            }                       
        });
    });
    $('#myselect').on('select2:select', function (e) {
        $("#myselect").select2("val", e.params.data.id);
    });
});
