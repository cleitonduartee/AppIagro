#pragma checksum "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Propriedade\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "96134295a6a21de2aae6eac8752782e67309f3f1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Propriedade_Index), @"mvc.1.0.view", @"/Views/Propriedade/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"96134295a6a21de2aae6eac8752782e67309f3f1", @"/Views/Propriedade/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"016c6a07a471ea3bae45f38fbcae86e942884ee9", @"/Views/_ViewImports.cshtml")]
    public class Views_Propriedade_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/produtor/app.produtor.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/propriedade/app.propriedade.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/propriedade/app.propriedade.viewModel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Propriedade\Index.cshtml"
  
    ViewData["Title"] = "Propriedade";

#line default
#line hidden
#nullable disable
            WriteLiteral("<h1>");
#nullable restore
#line 4 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Propriedade\Index.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h1>


<div class=""container"">

    <table class=""table table-info"">
        <thead >
            <tr>
                <th scope=""col"">Inscricao Estadual</th>
                <th scope=""col"">Nome da Propriedade</th>
                <th scope=""col"">Produtor</th>
                <th scope=""col"">Municipio da Propriedade</th>
                <th scope=""col""></th>
            </tr>
        </thead>
        <tbody data-bind=""foreach: propriedades"">
            <tr>
                <td data-bind=""text: InscricaoEstadual ""></td>
                <td data-bind=""text: NomePropriedade""></td>
                <td data-bind=""text: NomeProdutor""></td>
                <td data-bind=""text: MunicipioPropriedade""></td>
                <td><button data-bind=""click: $parent.preparaEdicao"" type=""button"" class=""btn btn-warning"" data-toggle=""modal"" data-target=""#dialogPropriedade"">Editar</button></td>
            </tr>
        </tbody>
    </table>
    <div class=""modal-footer row justify-content-center"">
 ");
            WriteLiteral("       <button data-bind=\"click: preparaNovoCadastro\" type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#dialogPropriedade\">Cadastrar</button>\r\n    </div>\r\n\r\n");
            WriteLiteral(@"
    <div class=""modal fade"" id=""dialogPropriedade"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog modal-lg"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""nomeDialog"" data-bind=""if: isEditing "">Editar Propriedade</h5>
                    <h5 class=""modal-title"" id=""nomeDialog"" data-bind=""ifnot: isEditing "">Novo Propriedade</h5>
                    <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                <div class=""modal-body"">
                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "96134295a6a21de2aae6eac8752782e67309f3f17159", async() => {
                WriteLiteral(@"
                        <div class=""form-group row"">
                            <div class=""form-group col-sm-6"">
                                <label for=""nome"" class=""col-form-label"">Inscricao estadual:</label>
                                <input disabled type=""text"" class=""form-control"" id=""nome"" data-bind=""visible: isEditing, value: InscricaoEstadual"">
                                <input disabled type=""text"" class=""form-control"" id=""nome"" data-bind=""visible: !isEditing()"" value=""Será criado automaticamente."">
                            </div>
                            <div class=""form-group col-sm-6"">
                                <label for=""cpf"" class=""col-form-label"">Nome da propriedade:</label>
                                <input class=""form-control"" id=""cpf"" data-bind=""value: NomePropriedade""></input>
                            </div>
                        </div>
                        <div class=""form-group row"">
                            <div class=""form-group c");
                WriteLiteral(@"ol-sm-6"">
                                <select class=""form-control form-control-sm"" data-bind=""options: produtores,
                                                                                   optionsText: 'Nome',
                                                                                   optionsValue: 'ProdutorId',
                                                                                   optionsCaption: 'Selecione um produtor...',
                                                                                   value: ProdutorId"">
                                </select>
                            </div>
                            <div class=""form-group col-sm-6"">
                                <select class=""form-control form-control-sm"" data-bind=""options: municipios,
                                                                                   optionsText: 'Nome',
                                                                                   optionsValue: ");
                WriteLiteral(@"'MunicipioId',
                                                                                   optionsCaption: 'Selecione um municipio...',
                                                                                   value: MunicipioId"">
                                </select>
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
                <div class=""modal-footer"">
                    <button type=""button"" class=""btn btn-secondary"" data-dismiss=""modal"">Close</button>
                    <button type=""button"" class=""btn btn-warning"" id=""btnDialog"" data-bind=""visible: isEditing, click: atualizar "">Atualizar</button>
                    <button type=""button"" class=""btn btn-primary"" id=""btnDialog"" data-bind=""visible: !isEditing(), click: inserirNovo "">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>

</div>



");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "96134295a6a21de2aae6eac8752782e67309f3f111633", async() => {
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
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "96134295a6a21de2aae6eac8752782e67309f3f112729", async() => {
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
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "96134295a6a21de2aae6eac8752782e67309f3f113825", async() => {
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
