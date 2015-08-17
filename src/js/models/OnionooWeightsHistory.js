/*global GLOBE, Em */
GLOBE.OnionooWeightsHistory = Em.Object.extend({});
GLOBE.OnionooWeightsHistory.reopenClass({

    /**
     * Find weights history for a given fingerprint
     * @param {String} fingerprint
     * @param {Boolean} isHashed
     * @returns {Promise}
     */
    find: function(fingerprint, isHashed) {
        var hashedFingerprint = fingerprint;

        if (!isHashed) {
            // use generate hashed fingerprint if not already hashed
            hashedFingerprint = GLOBE.Util.hashFingerprint(fingerprint);
        }

        hashedFingerprint = hashedFingerprint.toUpperCase();

        var url = '/weights?lookup=' + hashedFingerprint;

        return GLOBE.getJSON(url).then(function(result) {
            return GLOBE.Util.compute3DaysHistory(GLOBE.Util.processHistoryResponse({
                consensusWeightFraction: 'consensus_weight_fraction',
                guardProbability: 'guard_probability',
                middleProbability: 'middle_probability',
                exitProbability: 'exit_probability'
            }, result));
        });
    }
});
