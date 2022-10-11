(function(d){	const l = d['bg'] = d['bg'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"*Change %0 content*":"*Промени %0 съдържание*","*Change to:* %0":"*Промени на:* %0","*Check item*":"*Провери единица*","*Format:* %0":"*Формат:* %0","*Indent:* %0":"*Отстояние:* %0","*Insert:* %0":"*Въведи:* %0","*Merge cells*":"*Сливане на клетки*","*Merge:* %0":"*Сливане:* %0","*Outdent:* %0":"*Изпъкни:* %0","*Remove all formatting*":"*Премахни цялото форматиране*","*Remove format:* %0":"*Премахни формат:* %0","*Remove highlight*":"*Премахни подчертаване*","*Remove image text alternative*":"*Премахни изображението в текстова алтернатива*","*Remove link*":"*Премахни връзка*","*Remove:* %0":"*Премахни:* %0","*Replace table cells*":"*Замени клетки в таблицата*","*Reset font background color*":"*Задай отново цвят на фона на шрифта*","*Reset font color*":"*Задай отново цвят на шрифта*","*Reset font family*":"*Задай отново семейство шрифтове*","*Reset font size*":"*Задай отново размер на шрифта*","*Reset image width*":"*Задай отново ширина на изображението*","*Set font background color:* %0":"*Задай цвят на фона на шрифта:* %0","*Set font color:* %0":"*Задай цвят на шрифта:* %0","*Set font family:* %0":"*Задай семейство на шрифта:* %0","*Set font size:* %0":"*Задай размер на шрифта:* %0","*Set highlight:* %0":"*Задай подчертаване:* %0","*Set image text alternative:* %0":"*Задай алтернатива на текст в изображение:* %0","*Set image width:* %0":"*Задай ширина на изображението:* %0","*Set link:* %0":"*Задай връзка:* %0","*Split cell:* horizontally":"*Раздели клетка:* хоризонтално","*Split cell:* vertically":"*Раздели клетка:* вертикално","*Split:* %0":"*Разделяне:* %0","*Uncheck item*":"*Непроверена единица*","%0 of %1":"%0 от %1","Accept all selected suggestions":"Приеми всички избрани предложения","Accept all suggestions":"Приеми всички предложения","Accept suggestion":"Приеми предложение","Added by":"Добавено от","Align center":"Централно подравняване","Align left":"Ляво подравняване","Align right":"Дясно подравняване",Anonymous:"Анонимен",Aquamarine:"Аквамарин","Are you sure?":"Сигурни ли сте?","Back to editing":"Обратно към редактиране",Big:"Едър",Black:"Черен","Block quote":"Цитат",Blue:"Син","Blue marker":"Син маркер",Bold:"Удебелен","Break text":"Раздели текст","Bulleted List":"Водещи символи",Cancel:"Отказ","Cannot determine a category for the uploaded file.":"Не може да бъде определена категория за качения файл.","Cannot upload file:":"Не може да качи файл:","Caption for image: %0":"Заглавие на изображението: %0","Caption for the image":"Заглавие на изображението","Centered image":"Центрирано изображение","Change image text alternative":"Промени изображението на текстовата алтернатива","Choose heading":"Избери заглавие",Column:"Колона",Comment:"Коментирай","Comment editor":"Редакция на коментар","Compare against selected":"Сравни с избрания",CONNECTED_USERS:["1 свързан потребител (аз)","%0 свързан потребители"],Default:"По подразбиране","Delete column":"Изтриване на колона","Delete comment thread?":"Изтрий серия от коментари?","Delete comment?":"Изтрий коментар?","Delete row":"Изтриване на ред","Dim grey":"Тъмно сив","Discard all selected suggestions":"Изтрий всички избрани предложения","Discard all suggestions":"Изтрий всички предложения","Discard suggestion":"Изтрий предложение",Downloadable:"Изтегляне","Dropdown toolbar":"Лента с падащо меню",Edit:"Редактирай","Edit block":"Редактирай блок","Edit link":"Редакция на линк",EDIT_X_OF_Y_REVISIONS:"Редактирай","Editor block content toolbar":"Лента с инструменти за блокиране на съдържанието на редактора","Editor contextual toolbar":"Контекстна лента с инструменти на редактора","Editor editing area: %0":"Зона за редактиране на редактора: %0","Editor toolbar":"Лента за редакция",ELEMENT_BLOCK_QUOTE:"блок-цитат",ELEMENT_BULLETED_LIST:"списък с подточки",ELEMENT_CAPTION:"надпис",ELEMENT_CODE_BLOCK:["код блок","%0 код блок"],ELEMENT_HEADING:["заглавие (ниво %1)","%0 заглавие (ниво %1)"],ELEMENT_HEADING_CUSTOM:["заглавие (%1)","%0 заглавие (%1)"],ELEMENT_HORIZONTAL_LINE:["хоризонтална линия","хоризонтална линия"],ELEMENT_HTML_EMBED:["HTML вграждане","%0 HTML вграждане"],ELEMENT_IMAGE:["изображение","%0 изображение"],ELEMENT_INLINE_IMAGE:["изображение","%0 изображение"],ELEMENT_LINE_BREAK:["край на линия","%0 край на линия"],ELEMENT_LIST_ITEM:["единица от списък","%0 единица от списък"],ELEMENT_MEDIA:["медийна единица","%0 медийна единица"],ELEMENT_NUMBERED_LIST:"номериран списък",ELEMENT_PAGE_BREAK:["край на страница","%0 край на страница"],ELEMENT_PARAGRAPH:["параграф","%0 параграф"],ELEMENT_SPACE:["интервал","%0 интервал"],ELEMENT_TABLE:["таблица","%0 таблица"],ELEMENT_TABLE_COLUMN:["колона на таблица","%0 колона на таблица"],ELEMENT_TABLE_COLUMN_WITH_TEXT:["колона на таблица *с текст* %1","%0 колона на таблица *с текст* %1"],ELEMENT_TABLE_ROW:["ред на таблица","%0 ред на таблица"],ELEMENT_TABLE_ROW_WITH_TEXT:["ред на таблица *с текст* %1","%0 ред на таблица *с текст* %1"],ELEMENT_TABLE_WITH_TEXT:"таблица *с текст* %0",ELEMENT_TITLE:"заглавие",ELEMENT_TODO_LIST:"списък със задачи","Empty document":"Празен документ","Enter image caption":"Въведи описание на изображението",EXTERNAL_COMMENT:"Този коментар идва от външен източник.",EXTERNAL_SUGGESTION:"Това предложение идва от външен източник.","Font Family":"Семейство шрифтове","Font Size":"Размер на шрифта",FORMAT_ALIGN_TO_CENTER:"подравни централно",FORMAT_ALIGN_TO_LEFT:"подравни наляво",FORMAT_ALIGN_TO_RIGHT:"подравни надясно",FORMAT_BOLD:"потъмни",FORMAT_CODE:"код",FORMAT_HEADER_COLUMN:"колона в заглавна част",FORMAT_HEADER_ROW:"ред в заглавна част",FORMAT_HIGHLIGHT:"подчертаване",FORMAT_ITALIC:"наклонен",FORMAT_JUSTIFY_TEXT:"подравнен от двете страни",FORMAT_REGULAR_COLUMN:"обикновена колона",FORMAT_REGULAR_ROW:"обикновен ред",FORMAT_RESTRICTED_DISABLED:"*Изключено при режим за ограничена редакция*",FORMAT_RESTRICTED_ENABLED:"*Включено при режим на ограничена редакция*",FORMAT_SIDE_IMAGE:"странично изображение",FORMAT_STRIKETHROUGH:"зачертаване",FORMAT_SUBSCRIPT:"долен индекс",FORMAT_SUPERSCRIPT:"горен индекс",FORMAT_UNDERLINE:"подчертаване","Full size image":"Изображение в пълен размер",Green:"Зелен","Green marker":"Зелен маркер","Green pen":"Зелена химикалка",Grey:"Сив","Header column":"Заглавна колона","Header row":"Заглавен ред",Heading:"Заглавие","Heading 1":"Заглавие 1","Heading 2":"Заглавие 2","Heading 3":"Заглавие 3","Heading 4":"Заглавие 4","Heading 5":"Заглавие 5","Heading 6":"Заглавие 6",Highlight:"Подчертай",Huge:"Много едър","Image resize list":"Списък с промените на размера на изображението","Image toolbar":"Лента с изображения","image widget":"Компонент за изображение","In line":"В линия","Initial revision":"Първоначална ревизия","Insert column left":"Вмъкни колона отляво","Insert column right":"Вмъкни колона отдясно","Insert image":"Вмъкни изображение","Insert media":"Вмъкни медия","Insert paragraph after block":"Въведи параграф след блока","Insert paragraph before block":"Въведи параграф преди блока","Insert row above":"Вмъкни ред отгоре","Insert row below":"Вмъкни ред отдолу","Insert table":"Вмъкни таблица",Italic:"Курсив",Justify:"Разпредели по равно","Left aligned image":"Изображение подравнено вляво","Light blue":"Светло син","Light green":"Светло зелен","Light grey":"Светло сив",Link:"Линк","Link URL":"Уеб адрес на линка","Loading...":"Зарежда...","Media URL":"Медиен уеб адрес","media widget":"Медиен компонент","Merge cell down":"Обединяване на клетка надолу","Merge cell left":"Обединяване на клетка отляво","Merge cell right":"Обединяване на клетка отдясно","Merge cell up":"Обединяване на клетка отгоре","Merge cells":"Обединяване на клетки","Name of the revision (optional)":"Име на ревизията (по желание)","Name this revision":"Наименувай тази ревизия",Next:"Следващ",No:"Не","No changes":"Няма промени",NUMBER_OF_CHANGES:["%0 промяна","%0 промяна"],NUMBER_OF_COMMENTS:["%0 Коментар","%0 Коментар"],"Numbered List":"Номериране","Open file manager":"Отвори управление на файлове","Open in a new tab":"Отваряне в нов раздел","Open link in new tab":"Отваряне на линк в нов раздел","Open media in new tab":"Отворете мултимедията в нов раздел","Open revision history":"Отвори история на ревизиите",Orange:"Оранжев",Original:"Оригинал",Paragraph:"Параграф","Paste the media URL in the input.":"Постави медииния уеб адрес във входа.",PENDING_ACTION_COMMENT_THREAD:"Незапазена промяна в серия от коментари.",PENDING_ACTION_REVISION_HISTORY:"Незапазена промяна в историята на ревизиите.",PENDING_ACTION_SENDING_DATA:"Изпращане на данни до сървъра.",PENDING_ACTION_SUGGESTION:"Незапазена промяна в предложение.","Pink marker":"Розов маркер",Previous:"Предишен",Purple:"Лилав",Red:"Червен","Red pen":"Червена химикалка",Redo:"Повтори",Remove:"Премахни","Remove Format":"Премахни форматиране","Remove highlight":"Премахни подчертаване","Removed by":"Премахнат от",REPLACE_TEXT:"*Замени:* %0 *с* %1","Reply...":"Отговори...","Resize image":"Промени размера на изображението","Resize image to %0":"Промени размера на изображението на %0","Resize image to the original size":"Възстанови оригиналния размер на изображението","Restore this revision":"Възстанови тази ревизия",Restored:"Възстановен","Revision author":"Автор на ревизията","Revision creator":"Създател на ревизията","Revision history":"История на ревизиите","Revision name":"Име на ревизията","Rich Text Editor":"Богат текстов редактор","Right aligned image":"Изображение подравнено вдясно",Row:"Ред",Save:"Запазване","Save current revision":"Запази текущата ревизия","Saving changes":"Запазване на промените","Select all":"Избери всички","Select column":"Избери колона","Select row":"Избери ред","Show more items":"Покажи повече единици","Show next change":"Покажи следваща промяна","Show previous change":"Покажи предишна промяна","Side image":"Странично изображение",Small:"Малък","Split cell horizontally":"Разделяне на клетки хоризонтално","Split cell vertically":"Разделяне на клетки вертикално",Strikethrough:"Зачертаване",Submit:"Подай","Suggested by":"Предложен от","Synchronization issue":"Проблем при синхронизацията","Table toolbar":"Лента за таблици","Text alignment":"Подравняване на текста","Text alignment toolbar":"Лента за подравняване на текст","Text alternative":"Текстова алтернатива","Text highlight toolbar":"Лента за подчертаване на текст","The document cannot be connected back to the server. To not lose your content save it locally and refresh the editor.":"Документът не може да бъде свързан обратно към сървъра. За да не изгубите съдържанието си, запазете го локално и презаредете редактора.","The document details could not be taken during the reconnection. To not lose your content save it locally and refresh the editor.":"Данните за документа не могат да бъдат поети по време на повторното свързване. За да не изгубите съдържанието си, запазете го локално и презаредете редактора.","The last saved version of the document does not match the local version. To not lose your content save it locally and refresh the editor.":"Последната запазена версия на документа не отговаря на локалната версия. За да не изгубите съдържанието си, запазете го локално и презаредете редактора.","The local document and server document differ and merging them can cause unexpected behavior. To not lose your content save it locally and refresh the editor.":"Локалничт документ и сървърният документ се различават и сливането им може да доведе до неочаквано поведение. За да не изгубите съдържанието си, запазете го локално и презаредете редактора.","The URL must not be empty.":"Уеб адресът не трябва да бъде празен.","This link has no URL":"Този линк няма уеб адрес","This media URL is not supported.":"Този медиен уеб адрес не се поддържа.",Tiny:"Много малък","Tip: Paste the URL into the content to embed faster.":"Полезен съвет: Постави уеб адреса в съдържанието, за да вградите по-бързо.","Toggle caption off":"Превключи изключване на надписи","Toggle caption on":"Превключи включване на надписи",TOO_LONG_COMMENT_ALERT:"Съдържанието на коментара е твърде дълго. Вашият коментар има %0 знака, но лимитът е %1 знака.",Total:"Общо","Track changes":"Проследяване на промените",Turquoise:"Тюркоазен",Underline:"Подчертаване",Undo:"Отмени",Unlink:"Премахване на линка","Upload failed":"Качването е неуспешно","Upload in progress":"Качването е в процес",White:"Бял","Widget toolbar":"Лента с помощни средства","Wrap text":"Събери текст","Write a comment...":"Напиши коментар...",X_OF_Y_CHANGES:"%0 от %1",Yellow:"Жълт","Yellow marker":"Жълт маркер",Yes:"Да"}	);l.getPluralForm=function(n){return (n != 1);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));