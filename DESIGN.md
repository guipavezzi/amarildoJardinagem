# Direção de UX/UI e conteúdo

A implementação mantém o posicionamento profissional já existente: Amarildo Pavezzi, jardinagem em Campinas. As alterações são locais ao projeto Angular.

## Identidade visual

| Uso | Cor |
| --- | --- |
| Fundo creme | #F7F6EF |
| Títulos e seção de contato | #173F35 |
| Botão principal | #245C43 |
| Texto secundário | #59665C |
| Detalhes e CTA sobre fundo escuro | #D9E8A0 |
| Superfícies suaves | #E8EDDF |
| Bordas | #D7DDCE |
| Texto do botão principal | #FFFFFF |

Georgia nos títulos traz uma linguagem orgânica; Arial no corpo mantém a leitura simples e dispensa downloads de fontes. Tamanhos fluidos com clamp(), conteúdo limitado a 1200px, parágrafos curtos e espaços de 58–90px entre seções estabelecem a hierarquia. Verde claro deve ser usado como superfície ou destaque sobre fundo escuro, não como texto sobre creme.

## Copywriting e sequência AIDA

- Atenção: “Mais vida no jardim. Mais bem-estar no seu dia.”
- Interesse: os serviços ganham títulos de benefício, como “Espaço para respirar”, seguidos da descrição concreta do trabalho.
- Desejo: “Experiência que se vê. Cuidado que se sente.” apresenta o profissional; a seção de cuidados ajuda o visitante a identificar a própria necessidade.
- Ação: “Pedir orçamento pelo WhatsApp”, acompanhado do que enviar para iniciar a conversa.

As chamadas orientam uma ação real, sem promessas de conversão garantida. Para medir o resultado posteriormente, acompanhe cliques no WhatsApp e quantos se tornam pedidos de orçamento; compare períodos com fontes de tráfego semelhantes.

## Estrutura e próximos conteúdos

Apresentação → serviços e benefícios → profissional → necessidades do jardim → contato.

As quatro imagens da galeria original apontavam para um arquivo ausente. A seção foi substituída por orientações, e a ilustração disponível foi reaproveitada na abertura, identificada como ilustração no texto alternativo. Para uma galeria real, incluir 3–6 fotos autorizadas dos trabalhos, com serviço realizado, contexto e benefício observado. Comparativos antes/depois devem mostrar o mesmo espaço e condições semelhantes. Não apresentar ilustrações como projetos executados.

Os dois números originais foram preservados e identificados por canal: WhatsApp (19) 98770-8531 e telefone (19) 99167-6189. Confirmar com o responsável se ambos continuam corretos. A informação de mais de 20 anos vem do conteúdo original; os indicadores de 100% de satisfação e 100+ clientes foram retirados por falta de comprovação no projeto.

Para transformar o site em apresentação acadêmica, acrescentar objetivo, metodologia, etapas, resultados documentados, referências e créditos; substituir o orçamento por uma chamada para explorar os resultados.

## CSS aplicado

As variáveis e os estilos estão em src/styles.css. Exemplo do efeito de entrada utilizado:

```css
@keyframes arrive {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-copy, .hero-art { animation: arrive .65s ease-out both; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

O conteúdo continua disponível sem JavaScript adicional para animações. Há foco visível, link para pular ao conteúdo, títulos semânticos, destinos válidos nas âncoras e idioma pt-BR.

## Validação

- Build de produção concluído.
- Os seis testes existentes passaram após atualizar a expectativa antiga do título.
- Página conferida no navegador em desktop e celular: sem imagens ausentes, sem âncoras internas inexistentes e sem overflow horizontal nas larguras de 1366px e 390px.
- O botão de navegação para contato foi verificado; não foi enviada mensagem externa.

Para visualizar localmente: npm start e abrir http://localhost:4200.
