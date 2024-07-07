function calculateCGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach((grade, index) => {
        const gradeValue = parseFloat(getGradePoint(grade.value));
        const creditValue = parseFloat(credits[index].value);
        totalPoints += gradeValue * creditValue;
        totalCredits += creditValue;
    });

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}

function getGradePoint(grade) {
    switch (grade.toUpperCase()) {
        case 'A': return 4.0;
        case 'B': return 3.0;
        case 'C': return 2.0;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return 0.0;
    }
}
