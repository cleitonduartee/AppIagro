#pragma checksum "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Vendas\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "24af32c387021418e708910296f88b65e1bc5d29"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Vendas_Index), @"mvc.1.0.view", @"/Views/Vendas/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\_ViewImports.cshtml"
using AppIAGRO;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\_ViewImports.cshtml"
using AppIAGRO.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"24af32c387021418e708910296f88b65e1bc5d29", @"/Views/Vendas/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"016c6a07a471ea3bae45f38fbcae86e942884ee9", @"/Views/_ViewImports.cshtml")]
    public class Views_Vendas_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/produtor/app.produtor.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/propriedade/app.propriedade.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/vendas/app.vendas.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/animais/app.animais.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/vendas/app.vendas.services.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/vendas/app.vendas.viewModel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Vendas\Index.cshtml"
  
    ViewData["Title"] = "Vendas";

#line default
#line hidden
#nullable disable
            WriteLiteral("<div class=\"d-flex justify-content-between\">\r\n    <h1>");
#nullable restore
#line 5 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Vendas\Index.cshtml"
   Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h1>
    <div class=""d-flex align-items-end flex-column"">
        <div class=""p-2"">
            <span>Buscar compras por produtor</span>
            <button type=""button"" data-bind=""click: preparaBuscaCompras"" class=""btn btn-outline-info"" data-toggle=""modal"" data-target=""#dialogComprasEVendas"">Buscar</button>
        </div>
        <div class=""p-2"">
            <span>Buscar vendas por produtor</span>
            <button type=""button"" data-bind=""click: preparaBuscaVendas"" class=""btn btn-outline-info"" data-toggle=""modal"" data-target=""#dialogComprasEVendas"">Buscar</button>
        </div>
        <div class=""p-2"">
            <span>Cancelar venda</span>
            <button type=""button"" data-toggle=""modal"" data-target=""#dialogCancelarVendas"" class=""btn btn-outline-warning"">Cancelar</button>
        </div>
    </div>
</div>

<div class=""container"">

    <fieldset class=""form-group border p-3"">
        <legend class=""w-auto px-2""> Realizar Venda</legend>
        <div class=""form-group row"">
 ");
            WriteLiteral(@"           <div class=""form-group col-sm-6"">
                <span>Propriedade de origem</span>
                <select class=""form-control form-control-sm"" data-bind=""options: propriedadesOrigem,
                                                                        optionsText: 'NomePropriedade',
                                                                        optionsValue: 'NomePropriedade',
                                                                        optionsCaption: 'Selecione uma propriedade...',
                                                                        value: nomePropriedadeOrigem"">
                </select>
            </div>
            <div class=""form-group col-sm-6"">
                <span>Propriedade de destino</span>
                <select class=""form-control form-control-sm"" data-bind=""options: propriedadesDestino,
                                                                        optionsText: 'NomePropriedade',
                                 ");
            WriteLiteral(@"                                       optionsValue: 'PropriedadeId',
                                                                        optionsCaption: 'Selecione uma propriedade...',
                                                                        value: propriedadeIdDestino"">
                </select>
            </div>
        </div>
        <br />
        <table class=""table table-bordered table-info"">
            <thead>
                <tr>
                    <th colspan=""2"" class=""text-center "">Saldo disponível para venda</th>
                    <th colspan=""2"" class=""text-center "">Informe a quantidade de animais para o venda</th>
                </tr>
                <tr>
                    <th scope=""col"">Bovino</th>
                    <th scope=""col"">Bubalino</th>
                    <th scope=""col"">Bovino</th>
                    <th scope=""col"">Bubalino</th>
                </tr>
            </thead>
            <tbody data-bind=""foreach: animaisPropriedadeOrig");
            WriteLiteral(@"em"">
                <tr>
                    <td data-bind=""text: SaldoComVacinaBovino""></td>
                    <td data-bind=""text: SaldoComVacinaBubalino""></td>
                    <td><input data-bind=""value: $parent.qtdBovinoVenda, disable: SaldoComVacinaBovino() == 0, attr: { max: SaldoComVacinaBovino }"" class=""form-control"" type=""number"" min=""0"" /></td>
                    <td><input data-bind=""value: $parent.qtdBubalinoVenda, disable: SaldoComVacinaBubalino() == 0 , attr: { max: SaldoComVacinaBubalino }"" class=""form-control"" type=""number"" min=""0"" /></td>
                </tr>
                <tr data-bind=""visible: !$parent.existeSaldoParaVenda()"">
                    <th colspan=""4"" class=""text-center text-danger "">Propriedade não possui saldo para venda.</th>
                </tr>
            </tbody>
        </table>
        <div class=""container"">
            <fieldset class=""form-group border col-sm-12"">
                <legend class=""w-auto px-2""> Finalidade</legend>

         ");
            WriteLiteral(@"       <div class=""form-check d-flex justify-content-around"">
                    <div class=""form-check"">
                        <input class=""form-check-input"" type=""radio"" value=1 data-bind=""checked: finalidade"" name=""flexRadioDefault"" id=""REPRODUCAO"">
                        <label class=""form-check-label"" for=""REPRODUCAO"">
                            REPRODUÇÃO
                        </label>
                    </div>
                    <div class=""form-check"">
                        <input class=""form-check-input"" type=""radio"" value=2 data-bind=""checked: finalidade"" name=""flexRadioDefault"" id="" BRUCELOSE_B19"" checked>
                        <label class=""form-check-label"" for="" BRUCELOSE_B19"">
                            ENGORDA
                        </label>
                    </div>
                    <div class=""form-check"">
                        <input class=""form-check-input"" type=""radio"" value=3 data-bind=""checked: finalidade"" name=""flexRadioDefault"" id=""BRUCELOSE_RB51"" c");
            WriteLiteral(@"hecked>
                        <label class=""form-check-label"" for=""BRUCELOSE_RB51"">
                            TRABALHO
                        </label>
                    </div>
                </div>
                <br />
            </fieldset>
            <div class=""d-flex justify-content-center"">
                <div class=""form-group  mt-3"">
                    <button type=""button"" class=""btn btn-warning btn-lg"" data-bind=""click: reset"">Cancelar</button>
                    <button type=""button"" class=""btn btn-success btn-lg"" data-bind=""disable: !existeSaldoParaVenda(), click: realizarVenda"">Confirmar</button>
                </div>
            </div>
        </div>
    </fieldset>


    <div class=""modal fade"" id=""dialogComprasEVendas"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog modal-xl"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
               ");
            WriteLiteral(@"     <h5 class=""modal-title"" id=""nomeDialog"" data-bind=""text: tituloDialogCompraVendas""></h5>
                    <button type=""button"" data-bind=""click: reset"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                <div class=""modal-body"">
                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2913073", async() => {
                WriteLiteral(@"
                        <div class=""form-group row"">
                            <div class=""form-group col-sm-4"">
                                <label for=""cpf"" class=""col-form-label"">Produtor</label>
                                <select class=""form-control "" data-bind=""options: produtores,
                                                                        optionsText: 'Nome',
                                                                        optionsValue: 'ProdutorId',
                                                                        optionsCaption: 'Selecione uma produtor...',
                                                                        value:  produtorIdBuscaComprasEVendas"">
                                </select>
                            </div>
                            <div class=""container"">
                                <table class=""table table-bordered table-sm table-info"">
                                    <thead>
                           ");
                WriteLiteral(@"             <tr class=""text-center "">
                                            <th scope=""col"">Codigo Historico</th>
                                            <th scope=""col"">Propriedade Origem</th>
                                            <th scope=""col"">Propriedade Destino</th>
                                            <th scope=""col"">Quantidade Bovino</th>
                                            <th scope=""col"">Quantidade Bubalino</th>
                                            <th scope=""col"">Data Movimentacao</th>                                            
                                            <th scope=""col"">Finalidade</th>
                                            <th scope=""col"">Situação</th>
                                        </tr>
                                    </thead>
                                    <tbody data-bind=""foreach: historicosComprasEVendas"">
                                        <tr class=""text-center"" scope=""row"">
                  ");
                WriteLiteral(@"                          <td data-bind=""text: codigoHistorico""></td>
                                            <td data-bind=""text: propriedadeOrigemId""></td>
                                            <td data-bind=""text: propriedadeDestinoId""></td>
                                            <td data-bind=""text: qtdComVacinaBovino""></td>
                                            <td data-bind=""text: qtdComVacinaBubalino""></td>
                                            <td data-bind=""text: dataMovimentacao""></td>                                            
                                            <td data-bind=""text: finalidade""></td>
                                            <td data-bind=""text: status""></td>
                                        </tr>
                                    </tbody>
                                    <tbody data-bind=""visible: !$root.existeMovimentacoes()"">
                                        <tr>
                                            <th ");
                WriteLiteral(@"colspan=""8"" class=""text-center text-danger"" data-bind=""text: $root.msgQuandoNaoExisteMovimentacao""></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                </div>
            </div>
        </div>
    </div>

    <div class=""modal fade"" id=""dialogCancelarVendas"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog modal-xl"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""nomeDialog"">Cancelar Venda(s)</h5>
                    <button type=""button"" data-bind=""click: reset"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                 <div class=""modal-body"">
                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2918661", async() => {
                WriteLiteral(@"
                        <div class=""form-group row"">
                            <div class=""form-group col-sm-4"">
                                <label for=""cpf"" class=""col-form-label"">Propriedade</label>
                                <select class=""form-control "" data-bind=""options: propriedadesOrigem,
                                                                        optionsText: 'NomePropriedade',
                                                                        optionsValue: 'PropriedadeId',
                                                                        optionsCaption: 'Selecione uma produtor...',
                                                                        value:  propriedadeIdCancelarVendas"">
                                </select>
                            </div>
                            <div class=""container"">
                                <table class=""table table-bordered table-sm table-info"">
                                    <thead>
    ");
                WriteLiteral(@"                                    <tr class=""text-center "">
                                            <th scope=""col"">Codigo Historico</th>
                                            <th scope=""col"">Propriedade Destino</th>
                                            <th scope=""col"">Quantidade Bovino</th>
                                            <th scope=""col"">Quantidade Bubalino</th>
                                            <th scope=""col"">Data Movimentacao</th>                                            
                                            <th scope=""col"">Finalidade</th>
                                            <th scope=""col"">Situação</th>
                                            <th scope=""col""></th>
                                        </tr>
                                    </thead>
                                    <tbody data-bind=""foreach: historicosVendasParaCancelar"">
                                        <tr class=""text-center"" scope=""row"">
         ");
                WriteLiteral(@"                                   <td data-bind=""text: codigoHistorico""></td>
                                            <td data-bind=""text: propriedadeDestinoId""></td>
                                            <td data-bind=""text: qtdComVacinaBovino""></td>
                                            <td data-bind=""text: qtdComVacinaBubalino""></td>
                                            <td data-bind=""text: dataMovimentacao""></td>                                            
                                            <td data-bind=""text: finalidade""></td>
                                            <td data-bind=""text: status""></td>
                                            <td ><button data-bind=""click: $parent.realizarCancelamentoDeVenda,  disable: status() == 'CANCELADO' "" type=""button"" class=""btn btn-warning"">Cancelar</button></td>
");
                WriteLiteral(@"                                        </tr>
                                    </tbody>
                                    <tbody data-bind=""visible: !$root.existeMovimentacoesDeVendas()"">
                                        <tr>
                                            <th colspan=""8"" class=""text-center text-danger""> Não existe movimentação de venda(s) para essa propriedade. </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2923796", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2924892", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2925988", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2927084", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2928180", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "24af32c387021418e708910296f88b65e1bc5d2929276", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n\r\n");
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
