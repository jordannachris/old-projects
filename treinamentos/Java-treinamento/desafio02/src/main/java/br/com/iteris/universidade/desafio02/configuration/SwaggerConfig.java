package br.com.iteris.universidade.desafio02.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

    @Configuration
    @EnableSwagger2
    public class SwaggerConfig {
        @Bean
        public Docket api() {
            return new Docket(DocumentationType.SWAGGER_2)
                    .select()
                    .apis(RequestHandlerSelectors.basePackage("br.com.iteris.universidade.desafio02.controller"))
                    .paths(PathSelectors.any())
                    .build()
                    .apiInfo(apiInfo());
        }

        private ApiInfo apiInfo() {
            return new ApiInfo(
                    "desafio02",
                    "Universidade Iteris - Spring Boot: Desafio 02 - Lista de Tarefas",
                    "1.0.0",
                    "Disponível para estudos",
                    new Contact("Universidade Iteris", "https://iteris1.sharepoint.com/sites/universidade", "organizacao.td@iteris.com.br"),
                    "", "", Collections.emptyList());
        }
    }

