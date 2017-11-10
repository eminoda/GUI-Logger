const os = require('os');

function Util() {
}

Util.prototype.getCpuDiff = (oldCpu, newCpu) => {
    const idleDiff = oldCpu.idle - newCpu.idle;
    const totalDiff = oldCpu.total - newCpu.total;
    return 100 - ~~(100 * idleDiff / totalDiff);
};

Util.prototype.getCpuAvg = () => {
    let totalIdle = 0, totalTick = 0;
    const cpus = os.cpus();
    for (let i = 0, len = cpus.length; i < len; i++) {
        const cpu = cpus[i];
        // 累加所有参数
        for (type in cpu.times) {
            totalTick += cpu.times[type];
        }
        totalIdle += cpu.times.idle;
    }
    return {
        idle: totalIdle / cpus.length,
        total: totalTick / cpus.length
    };
}

Util.prototype.getHeapUsage = () => {

}
module.exports = new Util();