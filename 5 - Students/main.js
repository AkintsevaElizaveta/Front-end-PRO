const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    },
    {
        id: 14,
        name: 'Olaf Scholz',
        marks: [10, 9, 8, 9]
    },
    {
        id: 15,
        name: 'Emmanuel Macron',
        marks: [10, 9, 4, 7]
    },
    {
        id: 16,
        name: 'Mario Dragi',
        marks: [10, 4, 5, 4]
    },
    {
        id: 17,
        name: 'Stefan Salvatore',
        marks: [10, 10, 10]
    },
    {
        id: 18,
        name: 'Damon Salvatore',
        marks: [10, 10, 10, 10]
    },
    {
        id: 19,
        name: 'Katherine Pierce',
        marks: [8, 7, 8, 8]
    },
    {
        id: 20,
        name: 'Elena Gilbert',
        marks: [8, 9, 9, 10]
    },
]

let studentsObject = getStudent(10)

let average = averageMark(studentsObject.marks)
alert(`Середній бал студента ${studentsObject.name} - ${average}`)

let commonAverage = averageMark(getGroupMark())
alert(`Середній бал групи - ${commonAverage}`)

function getStudent(id){
    let studentById = students.find(item => item.id === id);
    return studentById;
}

function averageMark(arr){
    return arr.reduce((a, b) => (a + b)) / arr.length;
}

function getGroupMark() {
    let groupMarks = [];

    for (let i = 0; i < students.length; i++) {
        let marks = students[i].marks;
        groupMarks.push(...marks);
    }
    return (groupMarks)
}