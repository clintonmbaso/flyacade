var currentTeacherIndex = 0;

function calculateSalary() {
    var salaryPool = parseFloat(document.getElementById('salaryPool').value);
    var totalParameters = 0;
    var totalPupils = 0;
    var totalPerformance = 0;
    var totalMonths = 0;
    var totalQualification = 0;
    var totalAttendance = 0;

    for (var i = 0; i < teachers.length; i++) {
        totalPupils += teachers[i].pupils;
        totalPerformance += teachers[i].performance;
        totalMonths += teachers[i].months;
        totalQualification += teachers[i].qualification;
        totalAttendance += teachers[i].attendance;

        totalParameters += teachers[i].pupils + teachers[i].performance + teachers[i].months + teachers[i].qualification + teachers[i].attendance;
    }

    var totalBonusPool = totalPupils + totalPerformance + totalMonths + totalQualification + totalAttendance;
    var teacherBonuses = [];

    for (var i = 0; i < teachers.length; i++) {
        var teacherBonus = (teachers[i].pupils + teachers[i].performance + teachers[i].months + teachers[i].qualification + teachers[i].attendance) / totalParameters * salaryPool;
        teacherBonuses.push(teacherBonus);
    }

    var totalPayout = teacherBonuses.reduce((acc, curr) => acc + curr, 0);

    document.getElementById('salaryResult').innerHTML = `
        <p>${teachers[currentTeacherIndex].name} Salary: K${teacherBonuses[currentTeacherIndex].toFixed(2)}</p>
        <p>Total Salary Payout: K${totalPayout.toFixed(2)}</p>
    `;
}

function showTeacher(index) {
    document.getElementById('teacherName').innerText = teachers[index].name;
    document.getElementById('teacherPupils').value = teachers[index].pupils;
    document.getElementById('teacherPerformance').value = teachers[index].performance;
    document.getElementById('teacherMonths').value = teachers[index].months;
    document.getElementById('teacherQualification').value = teachers[index].qualification;
    document.getElementById('teacherAttendance').value = teachers[index].attendance;
    currentTeacherIndex = index;
}

function nextTeacher() {
    if (currentTeacherIndex < teachers.length - 1) {
        currentTeacherIndex++;
        showTeacher(currentTeacherIndex);
    }
}

function previousTeacher() {
    if (currentTeacherIndex > 0) {
        currentTeacherIndex--;
        showTeacher(currentTeacherIndex);
    }
}