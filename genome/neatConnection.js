(function(exports, selfBrowser, isBrowser){

    //if we need a node object, this is how we would do it
//    var cantorPair = isBrowser ? selfBrowser['cantorPair'] : require('../utility/cantorPair.js');
    var neatConnection = exports;


    neatConnection.NeatConnection = function(gid, weight, srcTgtObj) {

        var self = this;
        //Connection can be inferred by the cantor pair in the gid, however, in other systems, we'll need a source and target ID

        self.gid = gid;
        self.weight = weight;

        self.sourceID = srcTgtObj.sourceID;
        self.targetID = srcTgtObj.targetID;

        self.isMutated=false;
    };

    neatConnection.NeatConnection.Copy = function(connection)
    {
        return new neatConnection.NeatConnection(connection.gid, connection.weight, {sourceID: connection.sourceID, targetID: connection.targetID});
    };

    //send in the object, and also whetehr or not this is nodejs
})(typeof exports === 'undefined'? this['neatConnection']={}: exports, this, typeof exports === 'undefined'? true : false);