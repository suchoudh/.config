
$(function() {
    $(".mydropdownbox").each(function() {
        new myDropDown(this);
    });

    $(".mydatebox").each(function() {
        new myDate(this);
    });

    $(".mytextbox").each(function() {
        new myTextBox($(this));
    });

    $('[name=ClassesOffered] td').click(function() {
        if ($(this).hasClass('tileavl')) {
            $(this).removeClass('tileavl');
        }
        else {
            $(this).addClass('tileavl');
        };
    });

    $('#SearchByStationsButtonBox').click(function() {
        if ($('#FromStationContent').val() != '' && ($('#ThruStationContent').val() != '' || $('#ToStationContent').val() != '')) {
            var searchDate = $('#SearchDateContent-0').val();
            if (searchDate == '') searchDate = 0;
            var quotaID = $('#QuotaContent').val();
            if (quotaID == '') quotaID = 0;
            var kk = 0;
            var compositeVal = 0;
            $('[name=ClassesOffered] td').each(function() {
                if ($(this).hasClass('tileavl')) {
                    compositeVal += Math.pow(2, kk);
                };
                kk++;
            });
            $('#TrainClassBox').val(compositeVal);

            if ($('#ToStationContent').val() == '') {
                window.open('http://indiarailinfo.com/search/' +
                    $('#FromStationContent').val() + '/0/' + $('#ThruStationContent').val() +
                    '?co=' + $('#TrainClassBox').val() + '&date=' + searchDate + '&qt=' + quotaID);
            }
            else if ($('#ThruStationContent').val() == '') {
                window.open('http://indiarailinfo.com/search/' +
                    $('#FromStationContent').val() + '/0/' + $('#ToStationContent').val() +
                    '?co=' + $('#TrainClassBox').val() + '&date=' + searchDate + '&qt=' + quotaID);
            }
            else {
                window.open('http://indiarailinfo.com/search/' +
                    $('#FromStationContent').val() + '/' + $('#ThruStationContent').val() + '/' + $('#ToStationContent').val() +
                    '?co=' + $('#TrainClassBox').val() + '&date=' + searchDate + '&qt=' + quotaID);
            };
        }
        else if ($('#FromStationContent').val() != '') {
            window.open('http://indiarailinfo.com/departures/' + $('#FromStationContent').val());
        }
        else if ($('#ToStationContent').val() != '') {
            window.open('http://indiarailinfo.com/arrivals/' + $('#ToStationContent').val());
        }
        else {
        };
    });

    getPNR = function() {
        var pnr = $('#PNRNumber').val().replace(/\D|\s/g, '');
        if (pnr.length == 10) {
            $('#GetPNRBtn').after('<img pnr="' + pnr + '" src="' + chrome.extension.getURL('/images/ajax-loader.gif') + '" />');
            chrome.extension.getBackgroundPage().fetchPNR('', pnr, function(json) {
                if (json.data != '') {
                    $.post('http://indiarailinfo.com/pnr/update', {pnr: json.pnr, data: json.data}, function(data1) {
                        window.open('http://indiarailinfo.com/pnr/status/' + pnr);
                    });
                };
            });
        };
    };

    registerTrip = function() {
        var pnr = $('#PNRNumber').val().replace(/\D|\s/g, '');
        if (pnr.length == 10) {
            $('#GetPNRBtn').after('<img pnr="' + pnr + '" src="' + chrome.extension.getURL('/images/ajax-loader.gif') + '" />');
            chrome.extension.getBackgroundPage().fetchPNR('', pnr, function(json) {
                if (json.data != '') {
                    $.post('http://indiarailinfo.com/pnr/update', {pnr: json.pnr, data: json.data}, function(data1) {
                        $('#RegisterTripBtn').trigger('click');
                    });
                };
            });
        };
    };

    postPNR = function() {
        var pnr = $('#PNRNumber').val().replace(/\D|\s/g, '');
        if (pnr.length == 10) {
            $('#GetPNRBtn').after('<img pnr="' + pnr + '" src="' + chrome.extension.getURL('/images/ajax-loader.gif') + '" />');
            chrome.extension.getBackgroundPage().fetchPNR('', pnr, function(json) {
                if (json.data != '') {
                    $.post('http://indiarailinfo.com/pnr/update', {pnr: json.pnr, data: json.data}, function(data1) {
                        chrome.tabs.create({url: "http://indiarailinfo.com/pnr/status/" + pnr + "?a=1"});
                    });
                };
            });
        };
    };

    $('#FromStationBox').focus();
});
