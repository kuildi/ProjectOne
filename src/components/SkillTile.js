import React from 'react'
import Users from '../Pages/Users'
import Icon from './Icon'


export default class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            isCollapsed: false
        }
        this.expandTile = this.expandTile.bind(this);
        this.collapseTile = this.collapseTile.bind(this);
    }

    expandTile() {
        this.setState({ isExpanded: true })
    }
    collapseTile() {
        this.setState({ isExpanded: false })
    }

    render() {
        switch (this.props.tileId) {
            case 'HTML': {
                var expandedContent = <>
                    <p>Данный язык используется мной для базового представления и структурирования
                    содержимого сайтов. В своей работе я предпочитаю использовать стандарт HTML5 для более точного описания содержимого страниц,
                    что способствует улучшению приоритезации контента сайта.
                                       </p>
                </>
                break;
            }
            case 'CSS': {
                expandedContent = <>
                    <p>CSS (Cascading Style Sheets, каскадные таблицы стилей) — язык описания внешнего вида HTML-документа.
                                   Это одна из базовых технологий в современном интернете. CSS взаимодействует с браузером, чтобы придать документу оформление.</p>

                    <p>Sass позволяет мне использовать функции недоступные в самом CSS, например, переменные, вложенности, наследование и другие приятные вещи, возвращающие удобство написания CSS.</p>
                </>
                break;
            }
            case 'JS': {
                expandedContent = <>
                    <p>JavaScript язык программирования, который я использую для создания динамически обновляемого контента, анимации блоков, частичной обработки информации и вывода ее на страницу.</p>
                    <p>jQuery — библиотека JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. jQuery помогает легко получать доступ к любому элементу HTML, обращаться к его атрибутам и содержимому и манипулировать ими.</p>
                </>
                break;
            }
            case 'React': {
                expandedContent = <>
                    <p>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    Его цель — предоставить высокую скорость, простоту и масштабируемость. Для более углубленного изучения React мной был пройден курс от GeekBrains.
                                    </p>
                </>
                break;
            }
            case 'Redux': {
                expandedContent = <>
                    <p>Redux — библиотека управления состоянием для приложений, написанных на JavaScript.
                    Он помогает писать приложения, которые ведут себя последовательно, работают в разных средах, легко тестируемые и масштабируемые.
                                    </p>
                    <p>Пример работы - получение информации с сервера и выгрузка ее на страницу:</p>
                    <Users />
                </>
                break;
            }
            case 'Webpack': {
                expandedContent = <>
                    <p>Webpack — это инструмент, позволяющий скомпилировать, например, несколько JavaScript файлов в единый JS-файл. Это очень удобно при компонентной разработке.</p>

                    <p>Webpack я использую для:</p>
                    <ul>
                        <li>Транспиляции JavaScript следующего поколения до стандарта поддерживаемого браузерами. Сборки JS модулей.</li>
                        <li>Перевод Sass в CSS и сборки стилей в единый файл.</li>
                        <li>Использования “живой перезагрузки браузера” при разработке.</li>
                        <li>Для использования SVG спрайтов.</li>
                    </ul>
                </>
                break;
            }
            case 'Git': {
                expandedContent = <>
                    <p>Git — система контроля версий. Она позволяет сохранять и отслеживать все изменения внесенные в код, и при необходимости возвращаться к предыдущим версиям файлов.
                    Без системы контроля версий сложно представить командную разработку.
                                    </p>
                </>
                break;
            }
            case 'Design': {
                expandedContent = <>
                    <p>При верстке страниц часто необходимо свериться с сеткой макета или забрать из него изображения. Имею опыт работы в Photoshop и Figma.
                                    </p>
                </>
                break;
            }
            case 'Bootstrap': {
                expandedContent = <>
                    <p>Популярные фронтенд библиотеки для создания сайтов. Могут быть полезны для быстрой разработки демо версий проектов.
                                    </p>
                </>
                break;
            }
            case 'Responsive': {
                expandedContent = <>
                    <p>Адаптивная верстка - одно из ключевых требований к соверменным сайтам и веб-приложениям.
                    Основная цель добиться правильного отображения и доступности всего контента страниц на всех возможных устройствах.
                                    </p>
                </>
                break;
            }
            case 'Bem': {
                expandedContent = <>
                    <p>БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке, разработанный в Яндексе. В его основе лежит принцип разделения интерфейса на независимые блоки.
                    Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».
                                    </p>
                </>
                break;
            }
            case 'Compability': {
                expandedContent = <>
                    <p>Некоторые браузеры могут по разному интерпритировать верстку и JavaScript, что может негативно сказаться на пользовательком опыте.
                    При кроссбраузерной разработке можно добиться единого вида и поведения сайта во всех браузерах.
                                    </p>
                </>
                break;
            }
        }

        return (
            <div
                id={this.props.tileId}
                tabIndex={this.props.tabIndex}
                className={`tile ${this.state.isExpanded ? 'is-expanded' : 'is-collapsed'}`}
                onBlur={this.collapseTile}
            >
                <section className="tile__inner js-expander" onClick={this.expandTile}>
                    <Icon class="tile__inner__icon" name={this.props.iconClass} />
                    <p>{this.props.children}</p>
                </section>
                <section className="tile__expander">
                    {this.state.isExpanded ? expandedContent : ''}
                </section>
            </div>
        );
    }
}