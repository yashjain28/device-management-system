
/**
 * This service creates a new row in the `firmware` collection. On success it deletes all the message history on the `PORTALUPDATETOPIC` message topic. 
 * And then publishes a new message on that topic.
 * 
 * @param {string} fileversion
 * @param {string} description
 * @param {string} filecontent
 * @param {string} os
 * @param {string} architecture
 * 
 * 
 */
function DevMgnFirmwareUpload(req, resp){
    ClearBlade.init({request:req});
    var data = {
        filename: req.params.filename,
        fileversion: req.params.fileversion,
        description: req.params.description,
        filecontent: req.params.filecontent,
        os: req.params.os,
        architecture: req.params.architecture
    };
    log(data);
    var col = ClearBlade.Collection( {collectionName: TABLENAME_FILES } );
    col.create(data, function (err, data) {
        if (err) {
        	resp.error("Creation Error : " + JSON.stringify(data));
        } else {
            var msg = ClearBlade.Messaging();
            g_deleteMessages(PORTALUPDATETOPIC);
            msg.publish(PORTALUPDATETOPIC, "fileUpdated");
        	resp.success(data);
        }
    });
}

