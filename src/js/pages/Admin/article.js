var dataTableArticle;

var dataArticle = (function() {
    var initDataTable = function() {
        dataTableArticle = $("#table-article").DataTable({
            processing: true,
            serverSide: true,
            order: [[1, "asc"]],
            ajax: {
                url: "/Admin/GetArticleData",
                type: "POST",
                dataType: "JSON"
            },
            columns: [
                {
                    data: null,
                    render: function (data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                    },
                    className: "text-center"
                },
                {
                    data: 'title',
                    render: function (data, type, row) {
                        if (!data) return "";
                        let words = data.split(" ").slice(0, 4).join(" ");
                        return words + (data.split(" ").length > 4 ? "..." : "");
                    }
                },
                { data: 'author' },
                { data: 'category' },
                {
                    data: 'last_update',
                    render: function (data, type, row) {
                        if (!data) return '-';

                        const date = new Date(data);

                        // Format tanggal dengan nama bulan (dalam bahasa Indonesia)
                        const tanggal = date.toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                            timeZone: 'Asia/Jakarta'
                        });

                        // Format waktu HH:MM
                        const waktu = date.toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                            timeZone: 'Asia/Jakarta'
                        });

                        return `${tanggal} ${waktu}`;
                    }
                },
                {data: 'status'},
                {
                    className: "text-nowrap text-center no-export",
                    orderable: false,
                    render: function (data, type, row) {
                        return `<button onclick="editData(this,event);" data-id="${row.id}" type="button" class="btn btn-sm btn-success"><i class="bx bx-pencil"></i></button>  
                            <button onclick="delData(this, event);" data-id="${row.id}" type="button" class="btn btn-sm btn-danger"><i class="bx bx-trash"></i></button>`;
                    },
                },
            ],

        });
    };

    return {
        init: function() {
            initDataTable();
        },
    };
})();

$(document).ready(function() {
    dataArticle.init();
});

window.editData = (input, evt) => {
    evt.preventDefault();

    var contentBtn = $(input).html();

    beforeLoadingButton($(input));

    var id = $(input).data("id");
    console.log(id);
    window.location.href = "/Admin/EditArticle/" + id;
};

window.delData = (input, evt) => {
    if (evt) evt.preventDefault();
    var id = $(input).data("id");

    Swal.fire({
        title: "Hapus Data",
        text: "Anda yakin untuk menghapus Artikel tersebut ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus",
        cancelButtonText: "Batal",
        showLoaderOnConfirm: true,
        preConfirm: () => {
            return deleteData("/Admin/DeleteArticle/" + id)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .catch((error) => {
                Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            if (result.value.data.code == 200) {
                showMessage("success", "Sukses!", result.value.data.message);
                dataTableArticle.ajax.reload();
            } else {
                showMessage("error", "Failed", result.value.data.message);
            }
        }
    });
};

function deleteData(url) {
    return axios.delete(url);
}

function showMessage(type, title, message) {
    Swal.fire({
        icon: type,
        title: title,
        text: message
    });
}

function beforeLoadingButton(button) {
    $(button).prop("disabled", true);
    $(button).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
}