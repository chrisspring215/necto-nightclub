function valid()
{

	var human =  document.getElementById('human');
	
	if (human.value == 'yes' | human.value == 'YES' | human.value == 'Y' | human.value == 'y' | human.value == 'yup')
		{
			submit.value = "CONTACT US";
			submit.type = 'submit';
		}
	else
		{

			document.getElementById('submit');
			submit.value = "PLEASE FILL OUT ALL FIELDS";
		}
}