'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestJs-learn-1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' : 'data-bs-target="#xs-controllers-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' :
                                            'id="xs-controllers-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' : 'data-bs-target="#xs-injectables-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' :
                                        'id="xs-injectables-links-module-AppModule-bff9453a6ace5759e59997766af86cecac3cb04d8068d9c4e27bcd6ec968d6e83f723c3411bc54ba0af2c356099637a136e71677dde2dd470f3204532d0881dc"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' :
                                            'id="xs-controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' :
                                        'id="xs-injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-75fb932edfac90a39884af4599d1769b66ba251f517c20db443bb3ddf12b7a67f9b9291425ce7bb2cab124cc123b64cdabde7b84e7bc9f4e344108a3e2108941"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-3b2c5aaccae01d11b16c5cbe37a07508409d0c2fde35b64cd7a2ab8869bc943246c9c04a13e6a303250430bb7fe1d9c4181fe9c2bfee55629d30a806b6bbab48"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-3b2c5aaccae01d11b16c5cbe37a07508409d0c2fde35b64cd7a2ab8869bc943246c9c04a13e6a303250430bb7fe1d9c4181fe9c2bfee55629d30a806b6bbab48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-3b2c5aaccae01d11b16c5cbe37a07508409d0c2fde35b64cd7a2ab8869bc943246c9c04a13e6a303250430bb7fe1d9c4181fe9c2bfee55629d30a806b6bbab48"' :
                                        'id="xs-injectables-links-module-PaginationModule-3b2c5aaccae01d11b16c5cbe37a07508409d0c2fde35b64cd7a2ab8869bc943246c9c04a13e6a303250430bb7fe1d9c4181fe9c2bfee55629d30a806b6bbab48"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' :
                                            'id="xs-controllers-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' :
                                        'id="xs-injectables-links-module-PostsModule-553e964ecee0b2660294c345529e2f389b6c8dd01cfb076e8e53379aeb358d06045c99d3c874ce3aee5e602915baea1ce1536b90982f40564887f619b35c7356"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-456345272c998032c4e40c18763bb267d070347662110e97ecf0ecf2954c4fac45d4a83771986fb75dbf03a9d0f580b57a0479fd56c45222ca6d873c3f159f2e"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-456345272c998032c4e40c18763bb267d070347662110e97ecf0ecf2954c4fac45d4a83771986fb75dbf03a9d0f580b57a0479fd56c45222ca6d873c3f159f2e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-456345272c998032c4e40c18763bb267d070347662110e97ecf0ecf2954c4fac45d4a83771986fb75dbf03a9d0f580b57a0479fd56c45222ca6d873c3f159f2e"' :
                                            'id="xs-controllers-links-module-TagsModule-456345272c998032c4e40c18763bb267d070347662110e97ecf0ecf2954c4fac45d4a83771986fb75dbf03a9d0f580b57a0479fd56c45222ca6d873c3f159f2e"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' :
                                            'id="xs-controllers-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' :
                                        'id="xs-injectables-links-module-UsersModule-25e64e544f47cc3b35c60ab93e3940f3dd12714f8e394ebc063983983fce7640ee32c46fca773c3a37be55c32e38d5f15bc65202498394d710fa31252d408432"' }>
                                        <li class="link">
                                            <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersCreateManyProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateManyUsersDto.html" data-type="entity-link" >CreateManyUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagsDto.html" data-type="entity-link" >CreateTagsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/getPostsDto.html" data-type="entity-link" >getPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/paginationQueryDto.html" data-type="entity-link" >paginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagsService.html" data-type="entity-link" >TagsService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});