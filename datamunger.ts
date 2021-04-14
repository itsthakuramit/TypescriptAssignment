function splitStringBySpace(queryString : string){
    let splitArray: string []=[];
    let splitString : string[] = queryString.split(" ");
    splitString.forEach(element => {
        splitArray.push(element.toLowerCase());       
    })
    console.log(splitArray);
}
splitStringBySpace("select * from ipl.csv");
splitStringBySpace("select city,winner,player_match from ipl.csv where season > 2014 and city = 'Bangalore' order by city")
splitStringBySpace("select count(city),max(winner) from ipl.csv")
console.log("\n\n\===============================================================================================================\n\n")


function getFileName(queryString : string){
    let tempString : string[] = queryString.split("from");
    let splitString : string[] = tempString[1].trim().split(" ");
    console.log(splitString[0]);
}

getFileName("select city,winner,team1,team2 from ipl.csv");
getFileName("select max(winner),city from ipl.csv group by city");
getFileName("select city,winner,player_match from ipl1.csv where season > 2014 or city ='Bangalore'");
console.log("\n\n\===============================================================================================================\n\n")


function getBaseQuery(queryString : string){
    let splitArray : string[];
    if(queryString.search("where")){
        splitArray=queryString.split("where");
        console.log(splitArray[0]);
    }
    else{
        if(queryString.search("group by")){
            splitArray=queryString.split("group by");
            console.log(splitArray[0]);  
            }
        else{
        if(queryString.search("order by")){
            splitArray=queryString.split("order by");
            console.log(splitArray[0]);
            }
         }
     }
}
getBaseQuery("select city1,winner,player_match from ipl1.csv where season > 2014");
getBaseQuery("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore'");
getBaseQuery("select city,winner,player_match from ipl1.csv where city ='Bangalore'")
console.log("\n\n\===============================================================================================================\n\n")


function getFields(queryString : string){
    let splitString : string[]=[];
    let splitArray : string[]=[];
    let tempString : string []=queryString.split(" ");
    if(tempString[1].search(",")){
        splitString=tempString[1].split(",");
        splitString.forEach(element => {
            splitArray.push(element.toLowerCase());          
        })
        console.log(splitArray);
    }
    else{
        splitString=tempString[1].split("");  
    }
}

getFields("select city,winner,team1,team2 from ipl.csv");
getFields("select city,winner,player_match from ipl1.csv where season > 2014 or city ='Bangalore'");
getFields("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' group by winner");
console.log("\n\n\===============================================================================================================\n\n")


function getConditionPartQuery(queryString : string){
    let splitString : string[]=[];
    let str : string="";
    if(queryString.search("where")){
        splitString=queryString.split("where");
        str = splitString[1].trim();
        let index : number = 0;
        if(str.match(/ group by/)){
            index=str.indexOf("group by");
            str=str.substring(0,index);
        }
        else if(str.match(/ order by/)){
            index=str.indexOf("order by");
            str=str.substring(0,index);
        }
        else{
            str=str.toLowerCase();
        }
    }    
    else {
        console.log(""); 
    }   
    console.log(str.toLowerCase());     
}
getConditionPartQuery("select city,winner,player_match from ipl.csv where season > 2014");
getConditionPartQuery("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' order by city");
getConditionPartQuery("select city,winner,player_match from ipl1.csv where season > 2014 and city ='Bangalore' group by city");
console.log("\n\n\===============================================================================================================\n\n")


function getOrderByFields(queryString : string){
    let splitString : string []=[];
    let str : string = "";

    if(queryString.search("order by")){
        splitString=queryString.split("order by");
        str=splitString[1].trim();
            if(str.search(",")){
                splitString=str.split(",");
            }
            else{
                splitString=str.split("\n")
            }
        }
    else
        splitString=null;

    console.log(splitString);
}

getOrderByFields("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' order by city");
getOrderByFields("select city,winner,player_match from ipl.csv order by team1");
getOrderByFields("select city,winner1,player_match from ipl1.csv order by winner");
console.log("\n\n\===============================================================================================================\n\n")


function getGroupByFields(queryString : string){
    let splitString : string []=[];
    let str : string = "";

    if(queryString.search("group by")){
        splitString=queryString.split("group by");
        str=splitString[1].trim();
            if(str.search(",")){
                splitString=str.split(",");
            }
            else{
                splitString=str.split("\n")
            }
        }
    else
        splitString=null;

    console.log(splitString);
}

getGroupByFields("select city,winner1,player_match from ipl1.csv group by winner");
getGroupByFields("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' group by winner");
console.log("\n\n\===============================================================================================================\n\n")


function getAggregateFields(queryString : string){
        let  arr1 : string []= [];
        let  arr2 : string []= [];
        let  arr3 : string []= [];
        let  arr4 : string []= [];
		
        let str : string="";
        let str1 : string="";
        let i: number = 0;
		
			arr1=queryString.split(" ");
			str=arr1[1].toLowerCase().trim();
			if(str.match(/,/))
			{
			    arr2=str.split(",");
				for(i=0; i<arr2.length; i++)
				{   
					if(arr2[i].match(/count/))
					{
						str1=str1.concat(arr2[i]+" ");
					}
					
					else if(arr2[i].match(/max/))
					{
						str1=str1.concat(arr2[i]+" ");
					}
					
					else if(arr2[i].match(/min/))
					{
						str1=str1.concat(arr2[i]+" ");
					}
					
					else if(arr2[i].match(/avg/ ))
					{
						str1=str1.concat(arr2[i]+" ");
					}
					
					else if(arr2[i].match(/sum/ ))
					{
						str1=str1.concat(arr2[i]+" ");
					}
					
				else
                    str1=str1.trim();
                }
			}
			else
			{
				if(str.match(/count/))
				{   
                    str1=str1.concat(str);
				}
				else if(str.match(/max/))
				{
					str1=str1.concat(str);
				}
				else if(str.match(/min/))
				{
					str1=str1.concat(str);
				}
				else if(str.match(/avg/))
				{
					str1=str1.concat(str);
				}
				else if(str.match(/sum/))
				{
					str1=str1.concat(str);
				}
				else
					return null;
			}
	
				arr3=str1.split(" ");
                console.log(arr3)
        
}
getAggregateFields("select count(city),sum(win_by_runs),min(win_by_runs),max(win_by_runs),avg(win_by_runs) from ipl.csv");
getAggregateFields("select count(city),win_by_runs from ipl.csv where season > 2014 group by win_by_runs");
console.log("\n\n\===============================================================================================================\n\n")

function getConditionFields(queryString : string){
    let arr1 : string []=[];
    let arr2 : string []=[];
    let str : string ="";
    let index : number = 0;
    if(queryString.search("where"))
        {
        arr1=queryString.split("where");
        str=arr1[1].toLowerCase();
            if(str.match(/ and/) || str.match(/ or/) )
            {
                
                    if(str.match(/ group by/))
                        {
                        index=str.indexOf("group by");
                        str=str.substring(0, index);
                        arr2 = str.split("and");
                        }
                    else if(str.match(/ order by/))
                        {
                        index=str.indexOf("order by");
                        str=str.substring(0, index);
                        arr2 = str.split("and");
                        }
                    else
                        arr2 = str.split("and");
            }
            else
            {
                if(str.match(/ group by/))
                    {
                    index=str.indexOf("group by");
                    str=str.substring(0, index);
                    arr2=str.split("\n");
                    }
                else if(str.match(/ order by/))
                    {
                        index=str.indexOf("order by");
                        str=str.substring(0, index);
                        arr2=str.split("\n");
                    }
                else
                    {
                    arr2=str.split("\n");
                    }
            }
            let i:number=0;
            for(i=0; i<arr2.length; i++) 
            {
                arr2[i]=arr2[i].toLowerCase().trim();
            }
        }
            
            else
                arr2=null;
    
    
    console.log(arr2);
}

getConditionFields("select city,winner,player_match from ipl1.csv where season1 > 2014 and city ='Bangalore'");
getConditionFields("select city,winner,player_match from ipl1.csv where season > 2014 and city ='Bangalore' group by winner");
getConditionFields("select city,winner,player_match from ipl.csv where season > 2014");
console.log("\n\n\===============================================================================================================\n\n");


function getLogicalOperators(queryString : string){
        let arr1 : string []= [];
        let arr2 : string []= [];
        let arr3 : string []= [];
		let str : string ="";
        let str1 : string="";
		let index : number =0;
		if(queryString.match(/where/))
		{
			arr1=queryString.split("where");
			str=arr1[1].toLowerCase().trim();
			
				if(str.match(/group by/))
				{
					index=str.indexOf("group by");
					str=str.substring(0,index);
					arr2=str.split(" ");
				}
				else if(str.match(/order by/))
				{
					index=str.indexOf("order by");
					str=str.substring(0,index);
					arr2=str.split(" ");
				}
				else
					arr2=str.split(" ");			
				let i:number;
				for(i=0; i<arr2.length; i++)
				{
					if(arr2[i].match(/^and$/))
					{
						str1=str1.concat("and ");
					}
					else
						if(arr2[i].match(/^or$/))
					{
						str1=str1.concat("or ");
					}
					else
                        str1;
                    
                }
                str1=str1.trim();
				arr3=str1.split(" ");
				
				}		
				else
					arr3=null;		
		console.log(arr3);
}

getLogicalOperators("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' or city ='Delhi");
getLogicalOperators("select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' group by winner");
console.log("\n\n\===============================================================================================================\n\n");