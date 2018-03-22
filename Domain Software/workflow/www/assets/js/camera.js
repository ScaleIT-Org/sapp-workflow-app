var snapshottaken = false;
$(function() {
    var sayCheese = new SayCheese('#camera', { });
    sayCheese.on('start', function() {
        $('#action-buttons').fadeIn('fast');

        $('#take-snapshot').on('click', function(evt) {
            sayCheese.takeSnapshot();
            snapshottaken = true;
            document.getElementById("camera2").style.display = "none";
            document.getElementById("finish").style.display = "block";
            document.getElementById("next-btn").click();
            document.getElementById("next-btn").classList.remove("not-active");
            document.getElementById("prev-btn").classList.remove("not-active");
        });
        $('#snapshot-redo').on('click', function(evt) {
            $("#camera").show();
            $("#say-cheese-snapshots").hide();
            snapshottaken = false;
        });
        var video = document.getElementsByTagName("video")[0];
        video.height = 480;
        video.width = 640;
    });

    sayCheese.on('error', function(error) {
        var $alert = $('<div>');
        $alert.addClass('alert alert-error').css('margin-top', '20px');

        if (error === 'NOT_SUPPORTED') {
        $alert.html("<strong>:(</strong> your browser doesn't support video yet!");
        } else if (error === 'AUDIO_NOT_SUPPORTED') {
        $alert.html("<strong>:(</strong> your browser doesn't support audio yet!");
        } else {
        $alert.html("<strong>:(</strong> you have to click 'allow' to try me out!");
        }

        $('.say-cheese').prepend($alert);
    });

    sayCheese.on('snapshot', function(snapshot) {
        $("#camera").hide();
        $("#say-cheese-snapshots").empty();
        $("#say-cheese-snapshots").show();
        var img = document.createElement('img');
        
        $(img).on('load', function() {
            $('#say-cheese-snapshots').prepend(img);
        });
        img.src = snapshot.toDataURL('image/png');

    });

    sayCheese.start();
});