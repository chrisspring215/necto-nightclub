function valid()
{
	var human =  document.getElementById('human');
	
	if (human.value == 'yes' | human.value == 'Yes' | human.value == 'YES' | human.value == 'Y' | human.value == 'y' | human.value == 'yup')
		{
		
			submit.type = 'submit';
			document.getElementById("submit").disabled = false;
			submit.value = "CONTACT US";
		}
	else
		{
			document.getElementById("submit").disabled = true;
			submit.value = "PLEASE FILL OUT ALL FIELDS";
		}
}