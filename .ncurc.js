module.exports = {
    upgrade: true,
    reject: [
        // Block package upgrades that moved to ESM
        'nanoid',

        // some kind of CVE in later versions. Only needed for license reference, so the actual version does not matter anyway
        'startbootstrap-sb-admin-2'
    ]
};
