
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("output").value = "";
            }
        })
        function myFunction() {
            let a = document.getElementById("input").value;
            let date = new Date(a)
            let day = date.getDay();
            let result;
            switch (day) {
                case 0: {
                    result = "Today is Sunday. It's weekend Holiday."
                    break;
                }
                case 1: {
                    result = "Today is Monday. It's Working Day."
                    break;
                }
                case 2: {
                    result = "Today is Tuesday. It's Working Day."
                    break;

                }
                case 3: {
                    result = "Today is Wednesday. It's Working Day."
                    break;
                }
                case 4: {
                    result = "Today is Thrusday. It's Working Day."
                    break;
                }
                case 5: {
                    result = "Today is Friday. It's Working Day."
                    break;
                }
                case 6: {
                    result = "Today is Saturday. It's Weekend Holiday."
                    break;
                }
                default: {
                    result = "Please Enter the Right Date."
                    break;
                }
            }
            document.getElementById("output").style.display = "flex"
            document.getElementById("output").innerHTML = result;
            document.getElementById("input").value = "";
        }
 