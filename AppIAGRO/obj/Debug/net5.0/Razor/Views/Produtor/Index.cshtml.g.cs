#pragma checksum "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Produtor\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b9f60010bc6779160576e3aa5ed5ba6646a46162"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Produtor_Index), @"mvc.1.0.view", @"/Views/Produtor/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b9f60010bc6779160576e3aa5ed5ba6646a46162", @"/Views/Produtor/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"016c6a07a471ea3bae45f38fbcae86e942884ee9", @"/Views/_ViewImports.cshtml")]
    public class Views_Produtor_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/produtor/app.produtor.model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/app/produtor/app.produtor.viewModel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Produtor\Index.cshtml"
  
    ViewData["Title"] = "Produtor";

#line default
#line hidden
#nullable disable
            WriteLiteral("<h1>");
#nullable restore
#line 4 "C:\Pasta Cleiton\www\TesteIAGRO\Aplicação\AppIAGRO\AppIAGRO\Views\Produtor\Index.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\r\n\r\n\r\n");
            WriteLiteral(@"
<div class=""container"">

    <table class=""table table-info"">
        <thead>
            <tr>
                <th scope=""col"">Nome</th>
                <th scope=""col"">Cpf</th>
                <th scope=""col"">Endereco</th>
                <th scope=""col""></th>
            </tr>
        </thead>
        <tbody data-bind=""foreach: produtores"">
            <tr>
                <td data-bind=""text: Nome""></td>
                <td data-bind=""text: Cpf""></td>
                <td data-bind=""text: EnderecoCompleto""></td>
                <td><button data-bind=""click: $parent.preparaEdicao"" type=""button"" class=""btn btn-warning"" data-toggle=""modal"" data-target=""#dialogProdutor"">Editar</button></td>
            </tr>
        </tbody>
    </table>
    <div class=""modal-footer row justify-content-center"">
        <button data-bind=""click: preparaNovoCadastro"" type=""button"" class=""btn btn-primary btn-lg"" data-toggle=""modal"" data-target=""#dialogProdutor"">Cadastrar</button>
    </div>

");
            WriteLiteral(@"
    <div class=""modal fade"" id=""dialogProdutor"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog modal-lg"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""nomeDialog"" data-bind=""if: isEditing "">Editar Produtor</h5>
                    <h5 class=""modal-title"" id=""nomeDialog"" data-bind=""ifnot: isEditing "">Novo Produtor</h5>
                    <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                <div class=""modal-body"">
                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b9f60010bc6779160576e3aa5ed5ba6646a461626548", async() => {
                WriteLiteral(@"
                        <div class=""form-group row"">
                            <div class=""form-group col-sm-7"">
                                <label for=""nome"" class=""col-form-label"">Nome:</label>
                                <input type=""text"" class=""form-control"" id=""nome"" data-bind=""value: Nome"">
                            </div>
                            <div class=""form-group col-sm-5"">
                                <label for=""cpf"" class=""col-form-label"">Cpf:</label>
                                <input class=""form-control"" id=""cpf"" data-bind=""value: Cpf""></input>
                            </div>
                        </div>


                         
                        <fieldset class=""form-group border p-3"">
                            <legend class=""w-auto px-2"">Endereco</legend>
                            <div class=""form-group row"">
                                <div class=""form-group col-sm-8"">
                                    <label for=""NomeRua"" ");
                WriteLiteral(@"class=""col-form-label"">Nome da rua:</label>
                                    <input class=""form-control"" id=""NomeRua"" data-bind=""value: NomeRua""></input>
                                </div>
                                <div class=""form-group col-sm-4"">
                                    <label for=""Numero"" class=""col-form-label"">Numero:</label>
                                    <input class=""form-control"" id=""Numero"" data-bind=""value: Numero""></input>
                                </div>
                            </div>
                            <select class=""form-control form-control-sm""data-bind=""options: municipios,
                                                                                   optionsText: 'Nome',
                                                                                   optionsValue: 'MunicipioId',
                                                                                   optionsCaption: 'Selecione um municipio...',
                      ");
                WriteLiteral("                                                             value: MunicipioId\">\r\n                            </select>                           \r\n                        </fieldset>\r\n                    ");
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
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b9f60010bc6779160576e3aa5ed5ba6646a4616210854", async() => {
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
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b9f60010bc6779160576e3aa5ed5ba6646a4616211950", async() => {
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
