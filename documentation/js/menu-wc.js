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
                                            'data-bs-target="#controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' : 'data-bs-target="#xs-controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' :
                                            'id="xs-controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' : 'data-bs-target="#xs-injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' :
                                        'id="xs-injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' }>
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
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' :
                                            'id="xs-controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' :
                                        'id="xs-injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' }>
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
                                            'data-bs-target="#controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"' :
                                            'id="xs-controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' :
                                            'id="xs-controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' :
                                        'id="xs-injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' }>
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
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
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