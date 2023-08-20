{
    const  employees = [
    { name: "Sofia", department: 'IT', salary: 75000},
    { name: "Dima", department: 'sell', salary: 55000},
    { name: "Misha", department: 'IT', salary: 35000},
    { name: "Roma", department: 'Manager', salary: 95000},
    ]

    // find Misha
    let findMisha = employees.find((iten)=> iten.name === 'Misha')
    console.log(findMisha);
    // find salary > 90,000
    let findSalary = employees.some((iten)=>iten.salary>90000);
    console.log(findSalary)

    // write method all salary more 50 000
    let isSalaryMore = employees.every((iten)=>iten.salary > 50000);
    console.log(isSalaryMore)
}