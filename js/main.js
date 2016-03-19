var data = {
	'pageTitle': ' Тест по программированию',
	'categories': [{
		'categoryName': '1. Вопрос №1',
		'categoryList': [{
			'id': 'check11',
			'title': 'Вариант ответа № 1'
		},
		{
			'id': 'check12',
			'title': 'Вариант ответа № 2'
		},
				{
			'id': 'check13',
			'title': 'Вариант ответа № 3'
		}]
	},
	{
		'categoryName': '2. Вопрос №2',
		'categoryList': [{
			'id': 'check21',
			'title': 'Вариант ответа № 1'
		},
		{
			'id': 'check22',
			'title': 'Вариант ответа № 2'
		},
				{
			'id': 'check23',
			'title': 'Вариант ответа № 3'
		}]
	},
	{
		'categoryName': '3. Вопрос №3',
		'categoryList': [{
			'id': 'check31',
			'title': 'Вариант ответа № 1'
		},
		{
			'id': 'check32',
			'title': 'Вариант ответа № 2'
		},
				{
			'id': 'check33',
			'title': 'Вариант ответа № 3'
		}]	
	}],
}

var page = {
	buildPage: function(){
		var container = document.createElement('div');
		container.className ='container';
		document.body.appendChild(container);

		var titlePage = document.createElement('h1');
		titlePage.innerHTML = data.pageTitle;
		titlePage.className = 'text-center';
		container.appendChild(titlePage);

		var formPage = document.createElement('form');
		container.appendChild(formPage);
	},
	buildList: function() {
		for(var i = 0; i < data.categories.length; i++) {
			var categoryBox = document.createElement('div');
			categoryBox.className = 'checkbox';
			document.querySelector('form').appendChild(categoryBox);

			var titleCategory = document.createElement('h3');
			titleCategory.innerHTML = data.categories[i].categoryName;
			categoryBox.appendChild(titleCategory);

			var listContainer = document.createElement('ul');
			listContainer.className = 'list-unstyled';
			categoryBox.appendChild(listContainer);

			for(var j = 0; j < data.categories[i].categoryList.length; j++) {
				var listItem = document.createElement('li');
				listItem.style.marginLeft = '50px';
				listContainer.appendChild(listItem);

				var listLabel = document.createElement('label');
				listLabel.innerHTML = data.categories[i].categoryList[j].title;
				listLabel.setAttribute('for', data.categories[i].categoryList[j].id);
				listItem.appendChild(listLabel);

				var listInput = document.createElement('input');
				listInput.setAttribute('id', data.categories[i].categoryList[j].id);
				listInput.setAttribute('type', 'checkbox');
				listItem.insertBefore(listInput, listLabel);
			}
		}
	},
	buildBtn: function() {
		var button = document.createElement('button');
		button.className = 'btn btn-primary btn-lg center-block';
		button.innerHTML = 'Проверить мои результаты';
		document.querySelector('form').appendChild(button);
	},

	pageInit: function() {
		this.buildPage();
		this.buildList();
		this.buildBtn();
	}
}
page.pageInit();

	console.log(data);