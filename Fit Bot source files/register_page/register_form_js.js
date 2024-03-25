function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    const genderSelect = document.getElementById("gender");
    var occupation = document.getElementById("occupation").value;
    var email = document.getElementById("email").value;
    const physical_activity = document.getElementById("physical_activity");
    const sleep_duration = document.getElementById("sleep_duration");
    const fitness_goal = document.getElementById("fitness_goal");
   
  
    var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var agePattern = /^\d+$/;
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    var isValid = true;
  
    // for the name
    if (!name.match(namePattern)) {
      document.getElementById("name-error").innerHTML = "Invalid name";
      isValid = false;
    } else {
      document.getElementById("name-error").innerHTML = "";
    }
    
    // for age
    // age limit is applied
    if (!age.match(agePattern) || age < 14 || age > 100) {
        document.getElementById("age-error").innerHTML = "Invalid age";
        isValid = false;
    } else {
    document.getElementById("age-error").innerHTML = "";
    }

    // for the gender
    const genderValue = genderSelect.value;
    if (genderValue === "") {
        document.getElementById("gender-error").innerHTML = "Select a gender";
        isValid = false;
    }else {
    document.getElementById("gender-error").innerHTML = "";
    }


    // for occupation
    if (!occupation.match(namePattern)) {
        document.getElementById("occupation-error").innerHTML = "Invalid occupation";
        isValid = false;
    } else {
    document.getElementById("occupation-error").innerHTML = "";
    }

    // for the email
    if (!email.match(emailPattern)) {
      document.getElementById("email-error").innerHTML = "Invalid email address";
      isValid = false;
    } else {
      document.getElementById("email-error").innerHTML = "";
    }

    // for the physical activity
    const physical_activityValue = physical_activity.value;
    if (physical_activityValue === "") {
        document.getElementById("physical-activity-error").innerHTML = "Select your daily physical activity";
        isValid = false;
    }else {
    document.getElementById("physical-activity-error").innerHTML = "";
    }

    // sleep duration
    const sleep_durationValue = sleep_duration.value;
    if (sleep_durationValue === "") {
        document.getElementById("sleep-error").innerHTML = "Select how many hours you sleep daily";
        isValid = false;
    }else {
    document.getElementById("sleep-error").innerHTML = "";
    }

    // fitness goal
    const fitness_goalValue = fitness_goal.value;
    if (genderValue === "") {
        document.getElementById("fitness-error").innerHTML = "Select your fitness goal";
        isValid = false;
    }else {
    document.getElementById("fitness-error").innerHTML = "";
    }
    // alert box
    if (isValid) {
      alert("Dear " + name + "Thank you for using Fitness BOT, The result will shown in a while");
      return true;
    } else {
      return false;
    }
  }