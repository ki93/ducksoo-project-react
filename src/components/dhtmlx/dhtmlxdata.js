const scales = [
    { unit: "year", step: 1, format: "MMMM" },
    { unit: "month", step: 1, format: "MMMM yyy" },
    { unit: "day", step: 1, format: "d" }
  ];
  
  const columns = [
    { name: "product_information", label: "Product Information", align: "center", width: "100%" },
    { name: "operation", label: "Operation", align: "center", width: "100%"},
    { name: "quantity", label: "Quantity", align: "center", width: "100%" },
    { name: "start", label: "Start Time", align: "center", width: "100%"},
    { name: "end", label: "End Time", align: "center", width: "100%"},
    { name: "duration", label: "Duration", align: "center", width: "100%" },
    { name: "add-task", label: "", align: "center", width: "100%"  }
  ];
  
  const tasks = [
    {
        id: 1,
        product_information: "A",
        operation: "OP100",
        quantity: 100,
        start_date: "2022-02-06",
        end_date: "2022-03-22",
        duration: 44,
        progress: 60,
        type: "project"
    },
    {
        id: 2,
        product_information: "B",
        operation: "OP200",
        quantity: 200,
        start_date: "2022-03-22",
        end_date: "2022-03-31",
        duration: 9,
        progress: 60,
        type: "project"
    },
  ];
  
  const links = [{ id:1,source: 2, target: 2, type: 1 }
  ];

  const layout = {
    css: "gantt_container",
    rows:[
        {
           cols: [
            {
              // the default grid view  
              view: "grid",  
              scrollX:"scrollHor", 
              scrollY:"scrollVer"
            },
            { resizer: true, width: 1 },
            {
              // the default timeline view
              view: "timeline", 
              scrollX:"scrollHor", 
              scrollY:"scrollVer"
            },
            {
              view: "scrollbar", 
              id:"scrollVer"
            }
        ]},
        {
            view: "scrollbar", 
            id:"scrollHor"
        }
    ]
  }
  
  export { scales, columns, tasks, links, layout };
  