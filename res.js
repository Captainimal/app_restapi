'use strict';

exports.ok = function (values, res) {
    var data = {
        'status' : 200,
        'values' : values
    };
    res.json(data);
    res.end();
}

// Response for nested matakuliah
exports.oknested = function(values, res){
    // Accumulation
    const result = values.reduce((accumulating, item)=>{
        // Determine group key
        if(accumulating[item.nama]){
            // Create group variable nama mahasiswa
            const group = accumulating[item.nama];
            // Check if array is matakuliah
            if(Array.isArray(group.matakuliah)){
                // Add value to matakuliah group
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            accumulating[item.nama] = item;
        }
        return accumulating;
    }, {});

    var data = {
        'status':200,
        'values':result
    };

    res.json(data);
    res.end();
}