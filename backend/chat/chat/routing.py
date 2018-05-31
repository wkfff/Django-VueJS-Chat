from channels.routing import ProtocolTypeRouter, URLRouter
import api.routing

channels_routing = ProtocolTypeRouter({
    'websocket': URLRouter(api.routing.websocket_urlpatterns)
})