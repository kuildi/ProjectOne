import React from 'react'
import Users from '../Pages/Users'
import Game from '../components/tic-tac-toe'
import Icon from './Icon'


export default class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
        this.expandTile = this.expandTile.bind(this);
    }

    expandTile() {
        this.setState({ isExpanded: !this.state.isExpanded })
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
                                   <br/>
                                   <p>Sass позволяет мне использовать функции недоступные в самом CSS, например, переменные, вложенности, наследование и другие приятные вещи, возвращающие удобство написания CSS.</p>
                                  </>
                break;
            }
            case 'JS': {
                expandedContent = <>
                                    <p>JavaScript язык программирования, который я использую для создания динамически обновляемого контента, анимации блоков, частичной обработки информации и вывода ее на страницу.</p>
                                    <br/>
                                    <p>jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу HTML, обращаться к его атрибутам и содержимому и манипулировать ими.</p>
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
                                    <Users />;
                                  </>
                break;
            }
            case 'Webpack': {
                expandedContent = 'Webpack'
                break;
            }
            case 'Git': {
                expandedContent = 'git'
                break;
            }
            case 'Design': {
                expandedContent = 'For makets'
                break;
            }
            case 'Bootstrap': {
                expandedContent = 'Bootstrap and materialize'
                break;
            }
            case 'Responsive': {
                expandedContent = 'responsive'
                break;
            }
            case 'Bem': {
                expandedContent = 'Bem from yandex'
                break;
            }
            case 'Compability': {
                expandedContent = 'compability'
                break;
            }
        }

        return (
            <div className="tile is-collapsed" id={this.props.tileId}>
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